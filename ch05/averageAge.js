var ancestry = JSON.parse(require("./code/ancestry.js"))

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Petronella de Decker"].born)