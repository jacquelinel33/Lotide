// return all the indices (zero-based positions) in the string where each character is found.

const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (!results.hasOwnProperty(letter)) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }delete results[' ']; 
  return results;
};

module.exports = letterPositions;
assertArraysEqual(letterPositions("hello").e, [1]);



