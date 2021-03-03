const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
};

const assertArraysEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀 Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEquals(eqArrays([1,2,3,4], [1,2,3,4,]), true);