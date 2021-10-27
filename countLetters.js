const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const countLetters = (input) => {
  let result = {};
  for (let letter of input.toUpperCase()) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters('LHL'));
module.exports = countLetters;