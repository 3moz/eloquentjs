const util = require('util')

var inputArr = process.argv[2].substring(1,process.argv[2].length-1).split(",");
var outputArr = []
for (var k = 0; k < inputArr.length; k++){
  outputArr.push(parseInt(inputArr[k]));
}
var arr = outputArr;

var prependItem = parseInt(process.argv[3])

var prependIt = function(list, item) {
  list = {
    value: item,
    rest: list
  }
  console.log(util.inspect(list, {showHidden: false, depth: null}));
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
  prependIt(list,prependItem);
}

console.info('original array: ', arr);
arrayToList(arr);
