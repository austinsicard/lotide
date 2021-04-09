const eqArrays = require('./eqArrays');

function assertArraysEqual(actual, expected) {

    if (eqArrays(actual, expected)) {
      
      console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
    
    } else {
      
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
    } 

  };

  //Fails
  // assertArraysEqual([], [1, 2]);
  //Passes
  // assertArraysEqual([1, 2, 3], [1, 2, 3]);

  module.exports = assertArraysEqual;