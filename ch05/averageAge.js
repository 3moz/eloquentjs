var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
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
    
    typeof(personMomBirthDate)=="number" ? ages.push(personMomAgeAtBirth) : console.log(person+"\'s mother's age not found") 
    
}

console.log("Average age of everyone's mother @ birth was", average(ages))