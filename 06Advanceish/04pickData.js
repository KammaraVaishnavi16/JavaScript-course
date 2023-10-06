//Destructuring the data

//constant cannot be changed once they are declared as string or arrays or objects etc..to anything.
const name1 = "vaishnavi";
// console.log(name);
// name = 4; // it throws the error
console.log(name1);

const user = ["vaishnavi", 3, "Admin"];

var [nameOfUser, courseCount, role] = user;

console.log(role);

const myUser = {
  name: "hitesh",
  courseCount: 5,
  role: "admin",
};

console.log(myUser.role);
