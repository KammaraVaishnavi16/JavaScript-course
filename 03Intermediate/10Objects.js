//objects -are more efficent than arrays, are combination of key-value pairs
var user = {
  firstName: "Vaishnavi",
  lastName: "Kammara",
  emaiId: "vaishu@gmail.com",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]); //in this the key value should be in double codes ""

user.loginCount = 44;
console.log(user);
console.table(user);

// assignment
//moble phone, name, model number, year release,price.. and dump it out using console.table.

var mobile = {
  name: "RedmiNote 10",
  modelNumber: 123456,
  yearRelease: 2020,
  price: 16000,
  RAM: "6GB",
  ROM: "128GB",
};

console.table(mobile);
