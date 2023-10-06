const User = require("./06classjs");

const vaishnavi = new User("vaishnavi", "vaishnavi.kammara1@gmail.com");
const kishore = new User("kishore", "kishore@gmail.com");

const users = [vaishnavi, kishore];

console.log(vaishnavi.getInfo());

vaishnavi.enrollCourse("React Js");
vaishnavi.enrollCourse("Angular js");
kishore.enrollCourse("node Js ");
console.log(vaishnavi.getCourseList());

// const courses = vaishnavi.getCourseList();

// courses.forEach((course) => {
//   console.log(
//     `The course ${course} is enrolled by ${vaishnavi.getInfo().name} `
//   );
// });

users.forEach((user) => {
  const courses = user.getCourseList();
  courses.forEach((course) => {
    console.log(`The course ${course} is enrolled by ${user.getInfo().name} `);
  });
});
