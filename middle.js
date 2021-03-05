const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀😀Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
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

//What do we have?
//an array 
//What do we want?
//find the middle element of that array. if the array is even, return two elements. if array is only 1 or 2 elements, return empty array. 
//How do we do that?
//Loop through the arrays and remove first and last element until the array length is < 2. 

// const middle = function (arrayInput) {
//   if (arrayInput.length == 1 || arrayInput.length == 2) {
//     return [];
//   } else {
//     let middle = arrayInput[((arrayInput.length - 1) / 2)];
//     if(middle) {
//       return [middle];
//     } else if (!middle) {
//       middle = Math.floor((arrayInput.length - 1) / 2);
//       oddArray = []
//       oddArray.push(arrayInput[middle]);
//       oddArray.push(arrayInput[middle + 1]);
//       return oddArray;
//     } return middle;
//   }
// };



const middle = function (arrayInput) {
  if (arrayInput.length == 1 || arrayInput.length == 2) {
    return [];
  } else {
    let newArray = [];
    let middleIndex = arrayInput.length/2
  }
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 4, 6, 7, 45])) // => [3, 4]