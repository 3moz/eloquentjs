//require node.js util method in order to print non-truncated object

//info: https://nodejs.org/api/util.html#util_util_inspect_object_options

/* depth <number> Specifies the number of times to recurse while formatting
the object. This is useful for inspecting large complicated objects.
Defaults to 2. To make it recurse indefinitely pass null.
*/

const util = require('util')

var inputArr = process.argv[2].substring(1,process.argv[2].length-1).split(",");
var outputArr = []
for (var k = 0; k < inputArr.length; k++){
  outputArr.push(parseInt(inputArr[k]));
}
var arr = outputArr;

var makeList = function(arr) {
  var list = null
  for (var i = arr.length-1; i >= 0; i--) {
    list = {
        value: arr[i],
        rest: list
    }
  }
  console.log(util.inspect(list, {showHidden: false, depth: null}))
}

makeList(arr);
