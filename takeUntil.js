//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//return a slice of the array with elements taken from the beginning. Will continue to until the callback returns a truthy value

//if call back item is false, push item into results array. break loop when truthy value is found. 

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else if (callback(item)) {
      break;
    }
  } return results;
};

module.exports = takeUntil;



