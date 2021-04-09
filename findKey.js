const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {

  let objKeys = Object.keys(obj);
  for (let value of objKeys) {
      if (callback(obj[value])) {
        return value;
      }
}
return undefined;
};

const ourObject = {
  "Canada": { population: 38.44},
  "MERICA": { population: 331.42 },
  "Mexico": { population: 129.97 },
  "India":  { population: 1390.38 },
  "Japan":  { population: 125.28 }
}

assertEqual(findKey(ourObject, x => x.population === 125.28), "Japan") // => "mexico"