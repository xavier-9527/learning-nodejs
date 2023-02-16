'use strict';

const fs = require('fs');

const readImgFile = () => {
  console.log("-----Read Image File Begin-----");
  fs.readFile(__dirname + '/sample.png', function(error, data) {
    if (error) {
      console.log(error);
      console.log("-----Read Image File End-----");
    } else {
      console.log(data.length + ' bytes');
      console.log(data);
      console.log("-----Read Image File End-----");
    }
  });
}

module.exports = readImgFile;