#!/usr/bin/node
const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
  size;

  constructor (size) {
    if (isNaN(size) || size <= 0) {
      return {};
    }

    super(size, size);
    this.size = size;
  }
}

module.exports = Square;
