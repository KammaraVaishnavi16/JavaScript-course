// three dots followed by any variable or args is spread operator or REST
// ...args

//spread : takes array elements and spread the values
function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];

console.log(sumOne(...myA)); //spread operator

//Rest -  takes individual valus and bunch them into the array
function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a + b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}
console.log(sumTwo(2, 3, 4, 1, 1, 1, 1));
