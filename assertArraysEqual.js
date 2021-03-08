const eqArrays = require('./eqArrays');

const assertArraysEqual = function(exptectedArr, actualArr) {
  if (eqArrays(exptectedArr,actualArr) === true) {
    console.log(`😀😀😀😀 Assertion passed! ${exptectedArr} === ${actualArr}`);
  } else {
    console.log(`Assertion failed! ${exptectedArr} !== ${actualArr}`);
  }
};


module.exports = assertArraysEqual; 
