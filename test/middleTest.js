let middle = require('../middle');
const assert = require('chai').assert;

describe("#Middle", ()=> {
  it("return [] if array only has one number", ()=> {
    assert.deepEqual(middle([1]),[]);
  });
  it("return [] if array has two numbers", ()=> {
    assert.deepEqual(middle([1,2]), []);
  });
  it("return middle if array is odd", ()=> { 
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("return middle two if array is even", ()=> {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  });
  it("", ()=> {

  });
});

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
