let takeUntil = require('../takeUntil');
let assert = require('chai').assert;

describe("takeUntil", () => {
  it("returns a slice of an array taken from the beginning until the callback is truthy", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1,[1, 2, 5, 7, 2]);
  });
});

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

//expected output
//[ 1, 2, 5, 7, 2 ]
// ---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]