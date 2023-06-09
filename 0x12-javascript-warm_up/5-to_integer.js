#!/usr/bin/node

const arg1 = process.argv[2];
const numArg = parseInt(arg1);

if (isNaN(numArg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + numArg);
}
