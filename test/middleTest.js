const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([]), []);


assertArraysEqual(middle(["Hello", "There", "Buddy"]), ["There"]);
// middle([]);

