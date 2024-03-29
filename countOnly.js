// This function should take in a collection of items and return counts for a specific subset of those items.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const assertEqual = require('./assertEqual');

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
};
console.log(countOnly(['hello', 'world', 'jello', 'hello'], {hello: true, jello: true, pudding: true}))
module.exports = countOnly;