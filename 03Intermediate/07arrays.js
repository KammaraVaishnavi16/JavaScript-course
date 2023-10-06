var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Andhra Pradesh", "Rajasthan", "Delhi", "Mumbai");

// console.log(states);

// console.log(states[1]);

// console.log(states.length);

states[2] = "Punjab";

// console.log(states);

var user = ["vaishnavi", "vaishu@gamil.com", 3, 34, true];

// console.log(user);

user.pop();
// console.log(user);

//unshift adds the new value to the first index and exising elements will be shifted right by one position
user.unshift("New Value");
// console.log(user);

//shift remove the first element from the array
user.shift();
console.log(user);

//gives the index of particular value
console.log(user.indexOf("vaishnavi"));

console.log(Array.from("123456789"));
