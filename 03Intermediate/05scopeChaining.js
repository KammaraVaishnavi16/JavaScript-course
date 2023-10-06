// grand-parent -> parent -> child
//child can access everthing from parent and grand parent - which means inside out can happen, but outer cannot access info which is inside of the scope.

var name = "Vaishnavi";

console.log(`Line number 3 ${name}`);

var sayName = () => {
  var name = "Mr ";
  console.log(`Line number 6 ${name}`);

  sayNameTwo();
  function sayNameTwo() {
    console.log(`Line number 10 ${name}`);
  }
};

sayName();
