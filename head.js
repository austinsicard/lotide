const assertEqual = require('./assertEqual');

head = function (first) {

  let firstElem = first[0];
  return firstElem;
  
};

// TEST CODE


//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;