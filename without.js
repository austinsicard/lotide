const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {

  const results = [];
  if (eqArrays(source, itemsToRemove)) {
  
    return results;
  }
    for (let j = 0 ; j < itemsToRemove.length ; j++) {
      for (let i = 0 ; i < source.length ; i++) {
        if (source[i] !== itemsToRemove[j]) {
          results.push(source[i]);
        }
      }
}
  return results;
};

//Passes
assertArraysEqual(without(["Austin", "Sicard", "Learns"], ["Sicard"]), ["Austin", "Learns"]);
assertArraysEqual(without(["Austin", "Sicard", "Learns"], ["Austin", "Sicard", "Learns"]), []);
