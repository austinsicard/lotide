const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (ourSentance) {
  const final = {};

  for (let our of ourSentance) {

    if (our !== " ") {

    if (final[our]) {

      final[our] += 1;

    } else {

      final[our] = 1;
    }
  }
}
  return final;
};
