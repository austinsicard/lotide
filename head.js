const assertEqual = require('./assertEqual');

const head = function (first) {
  let firstElem = first[0];
  return firstElem;
};
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(['b', 1, 'f', 6]));
module.exports = head;