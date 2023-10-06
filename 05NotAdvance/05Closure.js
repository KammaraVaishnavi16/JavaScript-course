function init() {
  var firstName = "Vaishnavi";
  function getFirstName() {
    console.log(firstName);
  }
  return getFirstName;
}
var value = init();
value();

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}
var add5 = doAddition(3);
// console.log(add5(5));
console.log(doAddition(4)(6));

// doAddition()()() // curring
