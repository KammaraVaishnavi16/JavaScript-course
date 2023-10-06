//Two types of major contexts are avaliable :
//Global context
//execution context - executing right now

//eg: global context
//there is already a global context running at this moment collecting information about the code
var num = 2;

var sayMe = () => {
  console.log(
    "at this time global context is kicking(sayMe function declaration) and the console in here is execution context"
  );
};

//when ever we call, the execution context is kicking
sayMe();

//global context is all about colleting information
//Execution context happen with every line of code which is executing, it will just come execute and go away

// Execution context features :
// Variable object
//Scope chain
//this

//two rules we must follow for execution context;
// 1.Function declarations are scanned and made available
// 2.Variable declarations are scanned and made undefined

//eg 1.Function declarations are scanned and made available

tipper("5");
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

//eg  2.Variable declarations are scanned and made undefined

//it gives error because variable is declared but initially it is undefined
// bigTipper("10");

// var bigTipper = (a) => {
//   var bill = parseInt(a);
//   console.log(bill + 5);
// };

//it gives you undefined
console.log(name);
var name = "vaishnavi";
