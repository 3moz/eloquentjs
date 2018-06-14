var ancestry = JSON.parse(require("./code/ancestry.js")) //array of objects

var centuryAges = []
var centuryGroups = []

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function addToCentGroup(person) { 
    personCentury = Math.ceil(person.died/100)
    if (centuryGroups[personCentury]) {
        centuryGroups[personCentury].push(person)     
    } else {
        centuryGroups[personCentury] = []
        addToCentGroup(person)
    }  
}

ancestry.forEach(function(person) {
    addToCentGroup(person)
})// --> {name:"",sex:"",born:int ..., century:int ...}


centuryGroups.forEach(function(century) {
    for (i = 0; i < century.length; i++){
        centuryAges.push(century[i]["died"]-century[i]["born"])
    }
    console.log(Math.ceil(century[0]["died"]/100),average(centuryAges))
    centuryAges = []
});
// -->
// 16 43.5
// 17 51.2
// 18 52.78947368421053
// 19 54.833333333333336
// 20 84.66666666666667
// 21 94
