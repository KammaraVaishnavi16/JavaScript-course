const vaishnavi = {
  firstName: "Vaishnavi",
  lastName: "Kammara",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
    First Name is ${this.firstName}
    Last Name is ${this.lastName}
    His role is ${this.role}
    and he is studying in ${this.courseCount} courses
    `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};
// vaishnavi.getInfo();

//with the help of bind()  i can borrow the getInfow method into the dj object
//bind always gives us the reference back
vaishnavi.getInfo.bind(dj)();
//or
var djInfo = vaishnavi.getInfo.bind(dj);
djInfo();

// call - directly calls the function
vaishnavi.getInfo.call(dj);
