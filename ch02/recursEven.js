// function isEven(num) {
//   return num===0 || (num-2)%2===0;
// } //my first soln

function isEven(num) {
  if (num===0){return true;}
  else if (num===1){return false;}
  else return (num > 0) ? isEven(num-2) : isEven((-1*num)-2);
}
console.log(isEven(process.argv[2]));
