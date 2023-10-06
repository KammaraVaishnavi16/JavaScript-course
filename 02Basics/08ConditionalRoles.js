// Create an application with following roles :
// admin - gets full access
// subadmin - gets access to create or delete courses
// testprep - gets access to create/delete tests
//contentUser - gets access to consume content

var user = "testprep";

switch (user) {
  case "admin":
    console.log("you will get full access");
    break;
  case "subadmin":
    console.log("you will get access to create/delete courses");
    break;
  case "testprep":
    console.log("you will get access to create/delete tests");
    break;
  case "contentUser":
    console.log("you will get access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}
