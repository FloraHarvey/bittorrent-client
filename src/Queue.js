'use strict';

module.exports = class {
  constructor(torrent) {
    this._queue = [];
    this._torrent = torrent;
  }

  addToQueue(pieceIndex) {
    const piece = {  
      index: pieceIndex,
      begin: 0,
      pieceLength: this._torrent.info['piece length']
    };
    this._queue.push(piece);
  }

  removeFromQueue() {
    return this._queue.shift();
  }

  length() {
    return this._queue.length;
  }

};
