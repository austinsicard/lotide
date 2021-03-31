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

function assertArraysEqual(actual, expected) {

  let compared = false;

  if (Array.isArray(actual) && Array.isArray(expected) 
  && actual.length === expected.length) {

    compared = true;

    for (let i = 0; i < actual.length; i++) {

      if (actual[i] !== expected[i]) {
        
        compared = false;
      }
    }
  }
    if (compared == true) {
      
      console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
    
    } else {
      
      console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  
    } 

  };


const letterPositions = function(wordTest) {

  const results = {};
  var i = -1;

  for (let word of wordTest) {

    i++;

    if (word !== " ") {
      
      if (results[wordTest[i]]) {
        
        results[wordTest[i]].push(i);
      
      } else {

        results[wordTest[i]] = [];
        results[wordTest[i]].push(i);

      }
    }
  }
  return results;
};

console.log(letterPositions("hello there"));