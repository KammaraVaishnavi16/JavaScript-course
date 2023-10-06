// Define a function that can answer the role of a user.
// A user can be on the following roles :
// admin : with all access
// subadmin : with access to create/delete courses
// testprep : with access to create/delete tests
// user : consume all the content
// other : trial user

// Input: getUserRole(name, role);

// function getUserRole(name, role) {
//   switch (role) {
//     case "admin":
//       return `${name} is the admin with all access`;
//       break; // this is not necessary
//     case "subadmin":
//       return `${name} is the subadmin with access to create/delete courses`;
//     case "testprep":
//       return `${name} is the testprep with access to create/delete`;
//     case "user":
//       return `${name} is the user to consume all the content`;
//     default:
//       return `${name} is the trial user`;
//   }
// }

//functional programming
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is the admin with all access`;
      break; // this is not necessary
    case "subadmin":
      return `${name} is the subadmin with access to create/delete courses`;
    case "testprep":
      return `${name} is the testprep with access to create/delete`;
    case "user":
      return `${name} is the user to consume all the content`;
    default:
      return `${name} is the trial user`;
  }
};
console.log(getUserRole("vaishnavi", "admin"));
