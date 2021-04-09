const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// const head = require('../head');
// const assertEqual = require('../assertEqual');


    // Passes

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// console.log("------------L-i-n-e--B-r-e-a-k------------");

//     // Fails
// assertEqual(head([3, 5, 9]), 8);
// assertEqual(head([]), 7);
// assertEqual(head(["This", "Is", "Wrong"]), "Hello");

