// Allow user to access course if he is :
// logged in from email
// logged in from google
// logged in from Facebook

var isLoggedInByEmail = true;
var isLoggedInByGoogle = false;
var isLoggedInByFacebook = true;

if (isLoggedInByEmail || isLoggedInByGoogle || isLoggedInByFacebook) {
  console.log("Logged in successful");
} else {
  console.log("create an account for the login");
}
