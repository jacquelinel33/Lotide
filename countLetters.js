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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`Assertion passed! ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion failed! ${arr1} !== ${arr2}`);
  }
};


const countLetters = function(stringInput) { 
  let result = {};

  for(let letter of stringInput) {
    if (!result[letter]) {
      result[letter] = 0;
    } 

    result[letter]++;
  }
  delete result[' ']; 
  return result;
};




console.log(countLetters("lighthouse in the house"));