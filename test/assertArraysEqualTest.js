const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


  //Fails
  assertArraysEqual([], [1, 2]);
  //Passes
  assertArraysEqual([1, 2, 3], [1, 2, 3]);
