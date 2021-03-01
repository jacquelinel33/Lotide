const assertEqual = function(actual, expected) {
} if (actual === expected) {
    console.log(`😀😀😀😀 Asssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  let newTail = [];
  for (let i = 1; i < input.length; i++) {
    newTail.push(input[i]);
  } return newTail;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 


