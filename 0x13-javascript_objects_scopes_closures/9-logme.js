#!/usr/bin/node

exports.logMe = function (item) {
  if (exports.logMe.counter === undefined) {
    exports.logMe.counter = 1;
  }
  console.log(`${exports.logMe.counter}: ${item}`);
  exports.logMe.counter++;
};
