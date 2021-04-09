const assertObjectsEqual = require('./assertObjectsEqual');

const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (let item of allItems) {

    if (itemsToCount[item]) {

      if (results[item]) {

        results[item] += 1;

      } else {

        results[item] = 1;

      }
    }
  }

  return results;

};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertObjectsEqual(result1["Jason"], 1);
// assertObjectsEqual(result1["Karima"], undefined);
assertObjectsEqual(result1["Fang"], 2);
// assertObjectsEqual(result1["Agouhanna"], undefined);
