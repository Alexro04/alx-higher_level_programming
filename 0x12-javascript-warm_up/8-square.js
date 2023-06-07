#!/usr/bin/node

const num = process.argv[2];
const intNum = parseInt(num);
if (isNaN(intNum)) {
  console.log('Missing size');
} else {
  for (i = 0; i < intNum; i++) {
    let allX = '';
    for (j = 0; j < intNum; j++) {
      allX += 'X';
    }
    console.log(allX);
  }
}
