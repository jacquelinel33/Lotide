//what
//have two object and we need to find equality
//check if objects have same number of keys
//check if value of one key is the same value in the other object

const assertEqual = require('./assertEqual');


const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
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

module.exports = eqObjects;


