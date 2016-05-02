var start = parseInt(process.argv[2]),
    end = parseInt(process.argv[3]),
    step = parseInt(process.argv[4])

var range = function() {
  var start = arguments[0], end = arguments[1], step = arguments[2];
  outputArr = [];
  for (var i = start; i <= end; i+=step){
    outputArr.push(i);
  }
  console.log(outputArr);
  return outputArr;
}

var sum = function() {
  var arr = arguments[0]
  var outputSum = 0;
  for (var i = 0; i < arr.length; i++) {
    outputSum += arr[i];
  }
  console.log(outputSum);
}

sum(range(start, end, step));
