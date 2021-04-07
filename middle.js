const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  const final = [];
  if (array.length > 2 && (array.length % 2 === 0)) {
    let j = (array.length / 2) - 1;
    let i = array.length / 2; 
    final.push(array[j]);
    final.push(array[i]);
    
    } else if (array.length >  2 && (array.length % 2 !== 0)) {
      let j = (array.length - 1) / 2;
    final.push(array[j]);
    }
  return final;
};

//middle([1, 2, 3, 4, 5, 6, 7]);
// middle(["Hello", "There", "Buddy"]);
// middle([]);

module.exports = middle;