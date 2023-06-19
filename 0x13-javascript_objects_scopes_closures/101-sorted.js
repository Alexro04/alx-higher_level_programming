#!/usr/bin/node

const dict = require('101-data.js');

const userIdsByOccurrence = {};
let UserId;
for (UserId in dict) {
  const occurrence = dict[UserId];
  if (occurrence in userIdsByOccurrence) {
    userIdsByOccurrence[occurrence].push(UserId);
  } else {
    userIdsByOccurrence[occurrence] = [UserId];
  }
}

console.log(userIdsByOccurrence);
