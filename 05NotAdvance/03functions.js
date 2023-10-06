//functional programming - in this functions are treated as first class citizens
//four major reasons for functional programming :
// 1 . it is more of writing style of code, majorly independent of programming language
//eg :
//step 1 : In functional programming we keep our functions and data seperately

var sayHello = function () {
  console.log("Hey Hello");
};
sayHello();

//self executing anonymous function -
//self executing means no body calls the function
// anonymous - it shouldn't have any name.
// (function (){
//   statement;
// })();
(function () {
  console.log("Hey Hi");
})();
