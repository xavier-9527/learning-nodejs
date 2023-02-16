'use strict';

const fs = require('fs');

// const data = 'Input Text';

const writeTextIntoFileAsync = (data) => {
  console.log(`--------Async--------Write File Begin---------------`);
  fs.writeFile(__dirname + '/output-test.txt', data, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('OK');
    }

    console.log(`--------Async--------Write File End---------------`);
  });
};

module.exports = writeTextIntoFileAsync;
