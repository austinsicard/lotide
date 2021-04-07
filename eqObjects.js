const eqArrays = function(actual, expected) {

  let compared = false;

  if (Array.isArray(actual) && Array.isArray(expected)
  && actual.length === expected.length) {

    compared = true;

    for (let i = 0; i < actual.length; i++) {
      
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

  if (obj1keys.length !== obj2keys.length) {

    return false;
  }
  for (const value of obj1keys) {

    // console.log(value);
    if (Array.isArray(object1[value]) && Array.isArray(object2[value])) {

      if (!eqArrays(object1[value],object2[value])) {
        
        return false;
      }
    } else {
      if (object1[value] !== object2[value]) {
        return false;
      }
    }
  }
  return true;
};


//Passes
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

//Fails
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;