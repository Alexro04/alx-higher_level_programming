#!/usr/bin/node

const num = process.argv[2];
const intNum = parseInt(num);
let i;
if (isNaN(intNum)) {
  console.log('Missing number of occurrences');
} else {
  for (i = 0; i < intNum; i++) {
    console.log('C is fun');
  }
}
