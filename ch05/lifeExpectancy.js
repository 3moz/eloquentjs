var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects

var centuryAvgs = {}
var byName = []

ancestry.forEach(function(person) {
    byName[person.name] = person;
});

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function assignCentury(person,century) {
    console.log(person);
}

console.log(byName.reduce(assignCentury))


