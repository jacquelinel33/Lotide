const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("return true is objects are equal", () => {
    assert.deepEqual()
  });
});


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertObjectsEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertObjectsEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3, 3, 6, 2, 1] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false);