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

var reverseArrayInPlace = function() {
  var left = null;
  var right = null;
  var length = outputArr.length;
  for (left = 0, right = length-1; left < right; left++, right--) {
    var temporary = outputArr[left];
    outputArr[left] = outputArr[right];
    outputArr[left] = temporary;
  }
  return outputArr
  //see more @http://stackoverflow.com/questions/5276953/what-is-the-most-efficient-way-to-reverse-an-array-in-javascript
}

console.log(reverse(outputArr));
console.log(reverseArrayInPlace(outputArr));
