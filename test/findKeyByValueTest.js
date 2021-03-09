const { assert } = require('chai');
let findKeyByValue = require('../findKeyByValue');

describe("findKeyByValue", () => {
  it("returns key(Genre) based on show given", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
});

