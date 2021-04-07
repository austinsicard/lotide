const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns 'Labs' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
});
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3);