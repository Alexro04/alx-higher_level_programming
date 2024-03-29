#!/usr/bin/node
const Square1 = require('./5-squares');

class Square extends Square1 {
  charPrint (c) {
    let i, j;
    for (i = 0; i < this.height; i++) {
      let allX = '';
      for (j = 0; j < this.width; j++) {
        if (c === undefined) {
          allX += 'X';
        } else {
          allX += c;
        }
      }
      console.log(allX);
    }
  }
}

module.exports = Square;
