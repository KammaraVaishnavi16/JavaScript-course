//user is only allowed to make purchase when he is :
// logged in
// email verified
// cardInfo - valid
// If any one is missing stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;
// if (isLoggedIn) {
//   console.log("Logged in successfull");
//   if (isEmailVerified) {
//     console.log("Email id is verified");
//     if (cardInfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("Allow user to make a purchase");
} else {
  console.log("you are not allowed to do that");
}
