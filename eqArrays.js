const assertEqual = require('./assertEqual');

const eqArrays = function(actual, expected) {

  let compared = false;

  if (Array.isArray(actual) && Array.isArray(expected)
  && actual.length === expected.length) {

    compared = true;

    for (let i = 0 ; i < actual.length ; i++) {
      
      if (actual[i] !== expected[i]) {

        compared = false;
      }
    }
  }
  return compared;
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;