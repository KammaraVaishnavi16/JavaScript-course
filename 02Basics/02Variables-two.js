const uid = "abc1234";

var fullName = "vaishnavi";
var emailId = "vaishnavi.kammara1@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var isLoggedInFromGoogle = false;

// to take input from user we use
// fullName = prompt("Enter you name")
// but the above one is not considered beacuse in this case we have to attach that particular file with the webpage

//to display the information
console.log(fullName);
console.log("user full name " + fullName);
//the below back ticks one give the ability to write in more freedom way
//Interpolation
console.log(`
  with unique Id: ${uid}
  User is : ${fullName}
  and his email : ${emailId}
  and uses the password : ${password}
  `);

// Assignment

// fullName.lName emailId, country,state,cousrecount loogedin
