#!/usr/bin/node

// getting the first and second arguments and converting to int
const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);

// addition of the two integers
function add (a, b) {
  let result;
  if (!isNaN(a) && !isNaN(b)) {
    result = a + b;
    return result;
  } else {
    return ('NaN');
  }
}
console.log(add(firstInt, secondInt));
