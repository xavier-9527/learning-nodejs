'use strict';

const fs = require('fs');

const copyFile = () => {
  const rs = fs.createReadStream(`${__dirname}/sample.txt`);
  const ws = fs.createWriteStream(`${__dirname}/copied.txt`);

  rs.pipe(ws);

  console.log('Copy File Done! ');
};

module.exports = copyFile;
