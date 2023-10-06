class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  // here # determines that the courseList is the private variable, we can only access it within the class
  #courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  //static keyword is considered as private, that no other classes can able to access the below function
  static login() {
    return `I'm the admin`;
  }
}

class subAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getSubAdmin() {
    return `I'm sub-admin`;
  }
}

module.exports = User;

const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("React Js");
console.log(rock.getCourseList());

const tom = new subAdmin("vaishnavi", "vaishu@gmail.com");
console.log(tom.getSubAdmin());
// console.log(tom.login());
console.log(tom.getInfo());
