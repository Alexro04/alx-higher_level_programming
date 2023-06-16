#!/usr/bin/node

exports.converter = function (base) {
  if (base < 2 || base > 32) {
    throw new Error('Invalid Base');
  }
  return function (number) {
    return number.toString(base);
  };
};
