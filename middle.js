
// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');


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

    console.log(final);
  return final;
};

//assertArrayEqual(eqArrays(middle([1, 2, 3, 4, 5, 6])), true); // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7]);
//middle(["Hello", "There", "Buddy"]);

module.export = middle;