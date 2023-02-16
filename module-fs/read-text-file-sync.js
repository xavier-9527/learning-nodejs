'use strict';

const fs = require('fs');

const readTextFileSync = () => {
  console.log('--------Sync ---- Read Text File Begin------');

  const data = fs.readFileSync(__dirname + '/sample.txt', 'utf-8');
  console.log(data.length + ' bytes');
  console.log(data);

  console.log('--------Sync ---- Read Text File End------');
};

module.exports = readTextFileSync;
