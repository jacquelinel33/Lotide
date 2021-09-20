const assertEqual = require('./assertEqual');

const head = function(input) {
  return input[0];
};

assertEqual(head([1,2,3,4,5,0]), 1)

module.exports = head;

