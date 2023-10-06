// show user a signout button if he is authenticated
// other wise show him option to Login or signup

var authenticated = true;

// if (authenticated) {
//   console.log("Show him the signout button");
// } else {
//   console.log("Show him the Login/signup button");
// }

authenticated
  ? console.log("Show him the signout button")
  : console.log("Show him the Login/signup button");
