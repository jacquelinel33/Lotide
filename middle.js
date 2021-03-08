const middle = function (arrayInput) {
  if (arrayInput.length == 1 || arrayInput.length == 2) {
    return [];
  } else {
    let middle = arrayInput[((arrayInput.length - 1) / 2)];
    if (middle) {
      return [middle];
    } else if (!middle) {
      middle = Math.floor((arrayInput.length - 1) / 2);
      oddArray = []
      oddArray.push(arrayInput[middle]);
      oddArray.push(arrayInput[middle + 1]);
      return oddArray;
    } return middle;
  }
};

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

module.exports = middle;


