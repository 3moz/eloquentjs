const util = require('util')

var inputArr = process.argv[2].substring(1,process.argv[2].length-1).split(",");
var outputArr = []
for (var k = 0; k < inputArr.length; k++){
  outputArr.push(parseInt(inputArr[k]));
}
var arr = outputArr;

var indexElem = parseInt(process.argv[3])

var findElemAtThis = function(list, indexElem) {
  if ((list.value != indexElem)&&(list.rest==null)) {
    console.log(undefined);
  } else if (list.value==indexElem){
    console.log(util.inspect(list, {depth:null}))
  } else {
    findElemAtThis(list.rest, indexElem);
  }
}

var arrayToList = function(arr) {
  var list = null
  for (var i = arr.length-1; i >= 0; i--) {
    list = {
        value: arr[i],
        rest: list
    }
  }
  console.log(util.inspect(list, {showHidden: false, depth: null}))
  findElemAtThis(list, indexElem)
}

console.info('original array: ', arr);
arrayToList(arr);
