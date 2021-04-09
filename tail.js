const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION

const tail = function(newArr) {
  let tailArr = [];
  if (newArr.length > 1) {
    tailArr = newArr.slice(1);
    }
  return tailArr;
};


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words).length, 2); // original array should still have 3 elements!
// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));

module.exports = tail;