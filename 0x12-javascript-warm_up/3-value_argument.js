#!/usr/bin/node

const fistArg = process.argv[2];
if (fistArg === undefined) {
  console.log('No argument');
} else {
  console.log(fistArg);
}
