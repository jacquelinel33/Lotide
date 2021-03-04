const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //checks if key arrays is same length. Ends is false. Continue checking if object:key exists
  if (keys1.length !== keys2.length) {
    return false;
  } for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

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

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected) === true) {
    console.log(`😀😀😀😀 Assertion passed! ${actual} === ${expected}`)
  } else {
    console.log(`Assertion failed! ${actual} !== ${expected}`)
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(eqObjects(ab, abc), false)


const cd = { c: "1", d: ["2", 3, 3, 6, 2, 1] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false)
