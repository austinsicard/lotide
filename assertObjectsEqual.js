const eqObjects = require('./eqObjects');

const ab = { a: "1", b: "2", };
const ba = { b: "2", a: "1" };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected)) {
      
    console.log(`✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  
  } else {
    
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  } 

};

assertObjectsEqual(ab, ba);