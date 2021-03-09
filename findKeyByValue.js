//what
//have and object and value
//what do we need to do?
//take in an object and value. search for the object and returns the key. if no key, returned undefined
//how ??


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objectInput, keyInput) {
  let keys = Object.keys(objectInput);
  for (let key of keys) {
    if (objectInput[key] === keyInput) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);