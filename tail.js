// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(newArr) {
  const tailArr = [];
  if (newArr !== undefined) {
    for (let i = 1; i < newArr.length; i++) {
      tailArr.push(newArr[i]);
    }
    console.log(tailArr);
  } else {
    console.log(tailArr);
  }
};



