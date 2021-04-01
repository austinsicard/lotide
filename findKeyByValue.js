const findKeyByValue = function(genre, movie) {

  for (let value of Object.keys(genre)) {
      
    if (genre[value] === movie) {
      return value;
    }
  }
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));