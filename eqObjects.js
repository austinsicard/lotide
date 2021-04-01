// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {

  let obj1keys = Object.keys(object1);
  let obj2keys = Object.keys(object2);
  let compared = true;

  if (obj1keys.length !== obj2keys.length) {

    return false;
  
  }

    for (const value of obj1keys) {

      if (Array.isArray(obj1keys[value]) && Array.isArray(obj2keys[value])) {

        if (!eqArrays(obj1keys[value],obj2keys[value])) {

          compared = false;

        }
        
      } else if (obj1keys[value] !== obj2keys[value]) {

        compared = false;

      }
    }
    return compared;
};

const ab = { a: "1", b: "2", c: "4"};
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true