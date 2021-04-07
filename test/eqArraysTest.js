const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

 // Passes
 assertEqual(eqArrays([], []), true);
 assertEqual(eqArrays([5, 6, 7],  [5, 6, 7]), true);
 assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], 
                      ["Hello", "Lighthouse", "Labs"]), true);
 
 console.log("------------L-i-n-e--B-r-e-a-k------------");
 
     // Fails
 assertEqual(eqArrays([], [1, 2, 3]), true);
 assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 5]), true);
 assertEqual(eqArrays([], []), false);