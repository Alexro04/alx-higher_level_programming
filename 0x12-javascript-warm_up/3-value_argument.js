#!/usr/bin/node

const fistArg = process.argv[2];
if (fistArg !== undefined) {
  console.log(fistArg);
} else {
  console.log('No Argument');
}
