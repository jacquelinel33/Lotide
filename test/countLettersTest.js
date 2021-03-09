let countLetters = require('../countLetters');
let assert = require('chai').assert;

describe("#Count Letters", () => {
  it("should return number of times letter appears in a string", () => {
    let stringInput = "lighthouse in the house";
    assert.deepEqual(countLetters(stringInput), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});

