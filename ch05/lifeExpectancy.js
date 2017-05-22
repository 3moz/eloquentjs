var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects

var centuryAvgs = []
var centuries = {}

ancestry.forEach(function(person) {
    if(Math.ceil(person.died/100) in centuries) {
        centuries[Math.ceil(person.died/100)].push(person.died-person.born)
    };

});

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

console.log(centuries)


