'use strict';

const fs = require('fs');

const writeStream = () => {
  const ws1 = fs.createWriteStream(`${__dirname}/output1.txt`, 'utf-8');

  ws1.write('使用Stream写入文本数据..\n');
  ws1.write('End...');
  ws1.end();

  const ws2 = fs.createWriteStream(`${__dirname}/output2.txt`);
  ws2.write(new Buffer('使用Stream写入二进制数据..\n', 'utf-8'));
  ws2.write(new Buffer('End...', 'utf-8'));
  ws2.end();

  console.log('Write File Done..');
};

module.exports = writeStream;
