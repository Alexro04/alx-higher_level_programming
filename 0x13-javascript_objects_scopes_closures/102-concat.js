#!/usr/bin/node

const fs = require('fs');

function concatFiles (file1, file2, destination) {
  try {
    const content1 = fs.readFileSync(file1, 'utf8');
    const content2 = fs.readFileSync(file2, 'utf8');
    const concatenatedContent = content1 + content2;
    fs.writeFileSync(destination, concatenatedContent);
    console.log('Files concatenated successfully.');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Check if all three file paths are provided as command line arguments
if (process.argv.length !== 5) {
  console.log('Usage: node concat_files.js <file1> <file2> <destination>');
} else {
  const file1 = process.argv[2];
  const file2 = process.argv[3];
  const destination = process.argv[4];
  concatFiles(file1, file2, destination);
}
