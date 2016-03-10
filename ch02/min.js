function min(num1, num2) {
  if (num1-num2<0) {return num1;} else {return num2;}
}
//take CLI input for args
console.log(min(process.argv[2], process.argv[3]));
