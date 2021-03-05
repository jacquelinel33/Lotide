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

const assertArraysEqual = function(exptectedArr, actualArr) {
  if (eqArrays(exptectedArr,actualArr) === true) {
    console.log(`Assertion passed! ${exptectedArr} === ${actualArr}`);
  } else {
    console.log(`Assertion failed! ${exptectedArr} !== ${actualArr}`);
  }
};


assertArraysEquals(["1",2,3], [1,2,5]);