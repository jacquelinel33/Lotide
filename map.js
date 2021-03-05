const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};

const assertArraysEqual = function(exptectedArr, actualArr) {
  if (eqArrays(exptectedArr,actualArr) === true) {
    console.log(`😀😀😀😀 Assertion passed! ${exptectedArr} === ${actualArr}`);
  } else {
    console.log(`Assertion failed! ${exptectedArr} !== ${actualArr}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];
const animals = ["cat", "dog", "rabbit"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[2]);

console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 't', 'g', 'b']);
assertArraysEqual(results2, [ '1']);