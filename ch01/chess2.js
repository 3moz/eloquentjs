var size = 8;
var str = '';
var counter = 0
for (var k = 0; k < size; k++){
  for (var i = 0; i <= size; i++){
    if (k%2===0){
      if(i%2===0 && i!==size){
        str+='#';
      } else str+=' ';
    } else if (k%2!==0){
      if(i%2===0){
        str+=' ';
      } else str+='#';
    }
    if (i===size){
      str+='\n';
    }
  }
}
console.log(str);
