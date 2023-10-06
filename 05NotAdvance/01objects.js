//prototype---------
//prototype chaining
//functional way of defining objects, by using this keyword
//the below function represents the object. known as prototype
var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(this.courseCount);
  };
};

//In here we can give properties, more functions,getter and setter methods
User.prototype.getFirstName = function () {
  console.log(`The first name of the user is ${this.firstName}`);
};

// if we want to create an object through the functional way then the new keyword is used.
var vaishnavi = new User("Vaishnavi", 3);
console.log(vaishnavi);
vaishnavi.getCourseCount();
if (vaishnavi.hasOwnProperty("firstName")) vaishnavi.getFirstName();
