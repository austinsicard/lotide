const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
 
  } else if (actual != expected) {
 
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);

  }

};

const eqArrays = function(a, b) {

  if (eqArrays[0] === eqArrays[1]) {
    return true;
  } else {
    return false;
  }


};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS