'use strict';

const fs = require('fs');

const readStream = () => {
  const rs = fs.createReadStream(`${__dirname}/sample.txt`, 'utf-8');

  rs.on('data', function (chunk) {
    console.log('DATA: ');
    console.log(chunk);
  });

  rs.on('end', function () {
    console.log('END');
  });

  rs.on('error', function (error) {
    console.log('ERROR: ', error);
  });
};

module.exports = readStream;
