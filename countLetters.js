const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function (stringInput) {
  let result = {};

  for (let letter of stringInput) {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  delete result[' '];
  return result;
};

module.exports = countLetters;
