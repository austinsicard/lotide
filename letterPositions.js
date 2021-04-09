const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(wordTest) {    /* Declaring letterPositions as a function with the 
                                                   parameters "wordtest" which is expected to be a String */

  const results = {};    // Object "reselts" is being declared empty so we can fill it with the correct information
  var i = -1;           // Var "i" is a number that is keeping track of which index the letter is at

  for (let word of wordTest) {    // This for..of statement goes through each letter individually

    i++;    // Each time a new letter is looped we add one to "i" because it's keeping track of the index (of the letter)

    if (word !== " ") {   // Skipping spaces (Notice how we keep this inside so our index number "i" stays accurate)
      
      if (results[wordTest[i]]) {   
        
        results[wordTest[i]].push(i);     // Push the numbers after the first occurence letter from our index counter "i" into the empty array 

      } else {

        results[wordTest[i]] = [];         /* Sets a new key in results which equals letter in the index and 
                                              stores an empty array value so we can push the index number in */ 

        results[wordTest[i]].push(i);     // Push the first letter from our index counter "i" into the empty array 

      }
    }
  }
  return results; 
};

assertArraysEqual(letterPositions("hello there").e, [1, 8, 10]);