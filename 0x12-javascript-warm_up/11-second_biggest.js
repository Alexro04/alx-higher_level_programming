#!/usr/bin/node
const arr = process.argv.slice(2);
const newArr = arr.map(element => parseInt(element));

function biggest (Arr) {
  let result = 0;
  let i;
  if (Arr.length > 1) {
    for (i = 0; i < Arr.length; i++) {
      if (Arr[i] > result) {
        result = Arr[i];
      }
    }
  }
  return result;
}
finalAnswer = biggest(newArr);
console.log(finalAnswer);
