let products = {
  living: {
    sofas: [
      { title: "sofa1", size: "small" },
      { title: "sofa2", size: "Large" },
      { title: "sofa3", size: "Large" },
      { title: "sofa4", size: "small" },
    ],
    tvCabinet: [],
  },
  bedromm: {},
  kitchen: {},
};
// products.living.sofas.map((sofa) => {
//   console.log(sofa.title);
// });

var list = products.living.sofas.filter((sofa) => {
  if (sofa.size === "Large") {
    return sofa;
  }
});
console.log(list);
console.log(list);
var user = {
  firstName: "Vaishnavi",
  lastName: "Kammara",
  emaiId: "vaishu@gmail.com",
  role: "admin",
  loginCount: 32,
  loggedInFrom: "facebook",
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (course) {
    this.courseList.push(course);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses and the courses are ${this.courseList}`;
  },
  info: function () {
    return `The user ${
      this.firstName + " " + this.lastName
    } is logged in from ${this.loggedInFrom} and enrolled in the courses ${
      this.courseList
    }`;
  },
};
console.log(user.getCourseCount());
user.buyCourse("React js");

console.log(user.getCourseCount());
user.buyCourse("Node js");
console.log(user.info());
