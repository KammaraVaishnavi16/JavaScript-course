var isEven = (element) => {
  // if (element % 2 === 0) return true;
  // return false;
  return element % 2 === 0;
};

// console.log(`The function call is : ${isEven(2)}`);

var result = [2, 4, 6, 8].every(isEven);
console.log(result);

//call back - arrow function call backs especially in ES6.ES8
var values = [2, 4, 6, 8];
var result = values.every((element) => {
  return element % 2 === 0;
});
console.log(result);

//without writing return statement just using ()
var result = [2, 4, 6, 8].every((element) => element % 2 === 0);
console.log(`Didn't use return statement : ${result}`);

var a1 = [1, 2, 3, 4, 5];
var sum = 0;
a1.forEach((element) => {
  sum += element;
});
console.log(`result1 is ${sum}`);
