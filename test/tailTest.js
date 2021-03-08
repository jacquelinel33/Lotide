const tail = require('../tail');
const assert = require('chai').assert;

describe("#Tail ", ()=> {
  it("returns [1,2,3,4,5]", ()=> {
    assert.deepEqual(tail([0,1,2,3,4,5]), [1,2,3,4,5])
  });
});