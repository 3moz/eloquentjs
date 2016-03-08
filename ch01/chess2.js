 //take number arg for grid dimensions from CLI
var size = parseInt(process.argv[2]);

// function showall(size){
  var str = '';
  for (var k = 0; k < size; k++) {
    for (var i = 0; i <= size; i++) {
      if (k%2===0 && size%2!==0) { //on an even row with odd size
        if (i!==size) {
          if (i%2===0) {
            str += '#';
          } else if (i%2!==0) {
            str += ' ';
          }
        } else if (i===size) {
          str += '\n';
        }
      } else if (k%2!==0 && size%2!==0) { //on an odd row with odd size
        if (i!==size) {
          if (i%2===0) {
            str += ' ';
          } else if (i%2!==0) {
            str += '#';
          }
        } else if (i===size) {
          str += '\n';
        }
      }
      if (k%2===0 && size%2===0) {
        if (i%2===0 && i!==size) {
          str+='#';
        } else str+=' ';
      } else if (k%2!==0 && size%2===0) {
        if (i%2===0) {
          str+=' ';
        } else str+='#';
      } else if (i===size) {
          str+='\n';
      }
    }
  }
  console.log(str);
// }

//print a countdown of all chessboards of dimensions 'size' down to 0
// for (var n = size; n >= 0; n-- ){
//   showall(n);
// }
