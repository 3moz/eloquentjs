var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
