//The below are the Falsy values :
// undefined;
// null;
// 0;
// ("");
// NaN;

// example for falsycheck
var user = null;
if (user) {
  console.log("Condition is true");
}

//example for coercion - loose check
var user1 = "2";
if (2 == user1) {
  console.log("Condition is true which is coercion");
}

//strict/tight check - ===
if (2 === user1) {
  console.log("this is the strict check");
}
// console.log(2 + 2);
