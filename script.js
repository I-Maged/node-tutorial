const fs = require('fs');

const writeFile = 'Create file and write text';

fs.writeFile(
  'test.txt',
  writeFile.toString() + '\r\n',
  { flag: 'a+' },
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

const appendToFile = 'Append new content';

fs.appendFile('test.txt', appendToFile.toString() + '\r\n', (err) => {
  if (err) {
    console.error(err);
  }
});

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
