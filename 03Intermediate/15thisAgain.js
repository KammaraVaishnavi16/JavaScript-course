//this keyord :
//for all regular function calls, this points to window object

//eg
console.log(this);

var user = {
  firstName: "Vaishnavi",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 11 : " + this.courseCount);
  },
};

user.getCourseCount();
