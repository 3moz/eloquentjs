var input = ''
var target = process.argv[2][0];

for (var i = 3; i < process.argv.length; i++){
  input += String(process.argv[i]);
}

//test to make sure input string is what we think it is
console.log('string was: ',input,'\ntarget character was','\''+target+'\'');

function countChar(str, char) {
    var count = 0;
    for(var k = 0; k < str.length; k++) {
      if (str.charAt(k)===char){count++;}
    }
    return count;
}

console.log(countChar(input,target));
