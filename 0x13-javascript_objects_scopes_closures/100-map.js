#!/usr/bin/node

const list = require('101-data.js');
const newList = list.map((element, index) => element * index);
console.log(list);
console.log(newList);
