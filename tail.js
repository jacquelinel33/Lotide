const assertEqual = require('./assertEqual');

const tail = function(input) {
  let newTail = [];
  for (let i = 1; i < input.length; i++) {
    newTail.push(input[i]);
  } return newTail;
};

module.exports = tail;


