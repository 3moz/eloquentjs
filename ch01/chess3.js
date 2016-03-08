//take number arg for grid dimensions from CLI
var size = parseInt(process.argv[2]);

var str = '';

//case 1: size odd (rightmost col index is even)
if (size%2!==0) {
  for (var row = 0; row < size; row++) {
    for (var col = 0; col <= size; col++) {
      if (row%2===0) { //even row
        if (col%2===0) { //even indexed col
          str+='#';
        } else if (col%2!==0 && col!==size) { //odd indexed col
          str+=' ';
        }
        if (col===size) { // rightmost col index
          str+='\n';
        }
      } else if (row%2!==0) { //odd row
        if (col%2===0) { //even indexed col
          str+=' ';
        } else if (col%2!==0 && col!==size) { //odd indexed col
          str+='#';
        }
        if (col===size) { //rightmost col index
          str+='\n';
        }
      }
    }
  }
} else if (size%2===0) { //case 2: size even (rightmost col index is odd)
  for (var row = 0; row < size; row++) {
    for (var col = 0; col <= size; col++) {
      if (row%2===0) { //even row
        if (col%2===0 && col!==size) { //even indexed col
          str+='#';
        } else if (col%2!==0) { //odd indexed col
          str+=' ';
        }
        if (col===size) { //rightmost col index
          str+='\n';
        }
      } else if (row%2!==0) { //odd row
        if (col%2===0 && col!==size) { // even indexed col
          str+=' ';
        } else if (col%2!==0) { //odd indexed col
          str+='#';
        }
        if (col===size) { //rightmost col index
          str+='\n';
        }
      }
    }
  }
}

console.log(str);
