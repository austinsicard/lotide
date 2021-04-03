const without = function(source, itemsToRemove) {

  const results = [];
  for (let j = 0 ; j < itemsToRemove.length ; j++) {
  for (let i = 0 ; i < source.length ; i++) {
    if (source[i] !== itemsToRemove[j]) {
      results.push(source[i]);
    }
  }
}
  console.log(results);
};



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  // Passed asserArrayEqual testing