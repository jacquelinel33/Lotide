const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const animals = ["cat", "dog", "rabbit"];

const results1 = map(words, word => word[0]);
const results2 = map(animals, animal => animal[2]);

describe("#map", () => {
  it("returns first letter of each element in array", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it("returns letter at index 2 of each element in array", () => {
    assert.deepEqual(results2, ['t', 'g', 'b']);
  });
});
