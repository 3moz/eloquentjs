var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = [];
var momAgeKnown = [];
var ages = [];

ancestry.forEach(function(person) {
    byName[person.name] = person;
});

for (person in byName) {
    
    var personBirthDate = byName[person].born;
        
    var personMomBirthDate = 
    byName[byName[person].mother] != null ? byName[byName[person].mother].born : "noRecord"
    
    var personMomAgeAtBirth =
    personMomBirthDate != "noRecord" ? personBirthDate - personMomBirthDate : "cant compute"
    
    typeof(personMomBirthDate)=="number" ? ages.push(personMomAgeAtBirth) : null 
    
}//--> 31.22

var momKnown = ancestry.filter(function(person) {
    return byName[person.name].mother && byName[byName[person.name].mother]
});

function map(array, transform) {
    var mapped = []
    for (var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

console.log(average(map(momKnown, function(person) {
    return person.born - byName[person.mother].born    
}))) //--> 31.22