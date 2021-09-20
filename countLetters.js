const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// const countLetters = function (stringInput) {
//   let result = {};

//   for (let letter of stringInput) {
//     if (!result[letter]) {
//       result[letter] = 0;
//     }
//     result[letter]++;
//   }
//   delete result[' '];
//   return result;
// };


const countLetters = (input) => {
  let result = {}
  for(let letter of input) {
    if (result[letter]){
      result[letter]++;
    } else {
      result[letter] =1;
    }
  }
  return result;
}

console.log(countLetters('LHL'));
module.exports = countLetters;
