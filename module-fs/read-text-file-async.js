'use strict';

const fs = require("fs");

const readTextFile = () => {
  console.log("------Read Text File Begin-----")
  fs.readFile(__dirname + '/sample.txt', 'utf-8', function(error, data) {
    if (error) {
      console.log(error);
      console.log("------Read Text File End-----")
    } else {
      console.log(data.length + ' bytes');
      console.log(data);
      console.log("------Read Text File End-----")
    }
  })
}

module.exports = readTextFile;