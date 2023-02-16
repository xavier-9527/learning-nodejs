'use strict';

const fs = require('fs');

const useBuffer = () => {
  console.log(`-----------Use Buffer Begin---------------`);

  const data = fs.readFileSync(__dirname + '/sample.txt');

  console.log(`First three bytes: ${data[0]}, ${data[1]}, ${data[2]}`);

  // Buffer --> String;
  const text = data.toString('utf-8');
  console.log(text);

  const buffer = new Buffer(text, 'utf-8');

  console.log(buffer);

  console.log(`-----------Use Buffer End---------------`);
};

module.exports = useBuffer;
