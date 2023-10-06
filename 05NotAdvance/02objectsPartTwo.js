var User = {
  name: "",
  getUserName: function () {
    console.log(`The user name is : ${this.name}`);
  },
};

var vaishnavi = Object.create(User);
console.log(vaishnavi);
vaishnavi.name = "vaishnavi";
vaishnavi.getUserName();

var sam = Object.create(User, {
  name: { value: "Sammy" },
  courseCount: { value: 3 },
});

sam.getUserName();
