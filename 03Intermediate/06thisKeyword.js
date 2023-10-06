//TODO part 1 for this keyword
console.log(this); // it prints an empty scope

//arrow function
var sayName = () => {
  var name = "Vaishnavi";
  console.log(this);
};

function sayName1() {
  var name = "Vaishnavi";
  console.log(this);
}
sayName();
sayName1();
