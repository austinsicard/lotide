// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

module.exports = {
  //head:   head,
  head,
  // tail:   tail,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  eqArrays
};