'use strict';

const fs = require('fs');

const useStat = () => {
  console.log('------------Use Stat Begin---------------');

  fs.stat(__dirname + '/sample.txt', function (error, stat) {
    if (error) {
      console.log(error);
    } else {
      console.log('isFile: ' + stat.isFile());
      console.log(`isDirectory: ${stat.isDirectory()}`);

      if (stat.isFile()) {
        console.log(`size: ${stat.size}`);
        console.log(`birth time: ${stat.birthtime}`);
        console.log(`modified time: ${stat.mtime}`);
      }
      console.log('------------Use Stat End---------------');
    }
  });
};

module.exports = useStat;
