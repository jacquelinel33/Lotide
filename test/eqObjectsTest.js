const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("should return true if object is equal", () => {
    const ab = { 
      a: "1",
      b: "2" 
    };
    const ba = { 
      b: "2", 
      a: "1" 
    };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
});

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);


// const cd = { c: "1", d: ["2", 3, 3, 6, 2, 1] };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);