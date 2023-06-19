#!/usr/bin/node
class Rectangle {
  width;
  height;

  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let i, j;
    for (i = 0; i < this.height; i++) {
      let allX = '';
      for (j = 0; j < this.width; j++) {
        allX += 'X';
      }
      console.log(allX);
    }
  }
}

module.exports = Rectangle;
