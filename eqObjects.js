const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//what
  //have two object and we need to find equality
  //check if objects have same number of keys
  //check if value of one key is the same value in the other object

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  if(keys1.length === keys2.length){  
    for (let key in keys1) {
      if (object1[key] === object2[key]) {
        return true; 
      } return false;
    }
  } return false;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab,ba), true)

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab,abc), false)
