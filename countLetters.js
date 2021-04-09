const assertObjectsEqual = require('./assertObjectsEqual');

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
assertObjectsEqual(countLetters(" test "), { t: 2, e: 1, s: 1 });

// console.log(countLetters(" test "));
