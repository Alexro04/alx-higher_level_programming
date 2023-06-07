#!/usr/bin/node

const arg1 = process.argv[2];
const num_arg = parseInt(arg1);

if (isNaN(num_arg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num_arg);
}
