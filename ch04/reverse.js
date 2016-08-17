var inputArr = process.argv[2].substring(1,process.argv[2].length-1).split(",");
var outputArr = []
for (var k = 0; k < inputArr.length; k++){
  outputArr.push(parseInt(inputArr[k]));
}

var newArr = [];
var reverse = function() {
  for (var i = outputArr.length-1; i >= 0; i--) {
    newArr.push(outputArr[i])
  }
  return newArr;
}

console.log(reverse(outputArr));
