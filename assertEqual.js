const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

