'use strict';

const s = 'Hello';

const greet = (name) => {
  console.log(`${s}, ${name} ！`)
}

const hi = (name) => {
  console.log(`Hi, ${name}`);
}


module.exports = {
  greet: greet,
  hi: hi
};