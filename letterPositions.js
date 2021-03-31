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


const letterPositions = function(wordTest) {    /* Declaring letterPositions as a function with the 
                                                   parameters "wordtest" which is expected to be a String */

  const results = {};    // Object "reselts" is being declared empty so we can fill it with the correct information
  var i = -1;           // Var "i" is a number that is keeping track of which index the letter is at

  for (let word of wordTest) {    // This for..of statement goes through each letter individually

    i++;    // Each time a new letter is looped we add one to "i" because it's keeping track of the index (of the letter)

    if (word !== " ") {   // Skipping spaces (Notice how we keep this inside so our index number "i" stays accurate)
      
      if (results[wordTest[i]]) {   
        
        results[wordTest[i]].push(i);
      
      } else {

        results[wordTest[i]] = [];         // Creates an empty array inside the object results so "i" can be pushed
        results[wordTest[i]].push(i);     // Push the letter 

      }
    }
  }
  return results;
};

console.log(letterPositions("hello there"));