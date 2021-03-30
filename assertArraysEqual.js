
const eqArrays = function(a, b) {

  if (a.length !== b.length) {
    return false;
}
for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
        return false;
    }
}
return true;
};

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (eqArrays != true) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  } 
};
