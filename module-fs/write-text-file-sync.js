'use strict';

const fs = require('fs');

const writeFileSync = (data) => {
  console.log(`--------Sync--------Write File Begin---------------`);
  fs.writeFileSync(__dirname + '/output-test.txt', data);

  console.log(`--------Sync--------Write File End---------------`);
};

module.exports = writeFileSync;
