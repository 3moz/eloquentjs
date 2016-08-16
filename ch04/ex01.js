var start = parseInt(process.argv[2]),
    end = parseInt(process.argv[3]),
    step = parseInt(process.argv[4])

var range = function() {
  console.log(arguments);
  outputArr = [];
  if (step > 0) {
    for (var i = arguments[0]; i <= arguments[1]; i+=arguments[2]) {
      outputArr.push(i);
    }
  } else if (step < 0) {
    for (var i = arguments[1]; i >= arguments[0]; i+=arguments[2]) {
      outputArr.push(i);
    }
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
