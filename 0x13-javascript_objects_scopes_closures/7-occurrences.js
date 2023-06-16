#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let apperances = 0;
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      apperances += 1;
    }
  }
  return apperances;
};
