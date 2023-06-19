#!/usr/bin/node
class Rectangle {
  width;
  height;

  constructor (w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      return {};
    }
    this.width = w;
    this.height = h;
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

  rotate () {
    const c = this.width;
    this.width = this.height;
    this.height = c;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}

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