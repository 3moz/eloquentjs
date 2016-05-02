var input = ''

for (var i = 2; i < process.argv.length; i++){
  input += String(process.argv[i]);
}

console.log('string was: ',input);//test to make sure input string is what we think it is

function countBs(str) {
  var bcount = 0;
  for (var k = 0; k < str.length; k++){
    if (str.charAt(k)==='B'){bcount++;};
  }
  return bcount;
}

console.log(countBs(input));
