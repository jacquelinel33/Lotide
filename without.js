//What do we have?
//we have a source array and itemsToRemove array.
//What do we want?
//return the source array with items removed
//How do we do that?
//if item exists in the array, remove it
//loop through array, compare if item[i] === 
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`Assertion passed! ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed! ${arr1} !== ${arr2}`);
  }
};

const without = function (source, itemsToRemove) {
  let newSource = []
  for (let i = 0; i < source.length; i++) {
    let toPush = true;
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[i] === itemsToRemove[y]) {
        toPush = false;
      }
    } if (toPush) {
      newSource.push(source[i]);
    }
  } return newSource;
};



const words = ["hello", "world", "lighthouse", "i", "am", "cool"];
console.log(without(words, ["lighthouse", "hello"]));;
