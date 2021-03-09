let assert = require('chai').assert;
let letterPositions = require('../letterPositions');

describe("letterPositions", () => {
  it("returns position of letter e in hello string", () => {
    assert.deepEqual(letterPositions("hello").e, [1])
  });
});


