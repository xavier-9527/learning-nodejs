'use strict';

const fs = require('fs');

const readImgFileSync = () => {
  console.log('--------Sync ---- Read Image File Begin------');

  const data = fs.readFileSync(__dirname + '/sample.png');

  console.log(data.length + ' bytes');
  console.log(data);

  console.log('--------Sync ---- Read Image File End------');
};

module.exports = readImgFileSync;
