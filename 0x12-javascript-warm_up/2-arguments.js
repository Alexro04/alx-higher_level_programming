#!/usr/bin/node
const args = process.argv;
if (args.length > 2) {
  if (args.length === 3) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
} else {
  console.log('No argument');
}
