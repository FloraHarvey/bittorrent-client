'use strict'

module.exports = class {
  constructor(torrent) {
    function buildPiecesArray() {
      const numberOfPieces = Math.ceil(torrent.info.pieces.length / 20);
      return new Array(numberOfPieces).fill(false);
      // TO DO: calculate blocks per piece
    }
    this._requested = buildPiecesArray();
    this._received = buildPiecesArray();
  };

  isComplete() {
    return this._received.every(piece=>piece);
  };

  needed(piece) {
    if (this._requested.every(p=>p)) {
      this._requested = this._received;
      // might need to map the pieces across one by one instead
    };
    return !this._requested[piece.index]
  };

  addRequested(piece){
    this._requested[piece.index] = piece;
  };

  addReceived(piece){
    this._received[piece.index] = {index: piece.index, begin: piece.begin, block: 'received'};
  };

};
