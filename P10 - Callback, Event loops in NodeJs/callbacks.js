const fs = require('fs');

console.log("Start of Code")

fs.readFile('example.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data.toString());
});

console.log("End of Code")