const courses = [
  {
    name: "Complete ReactJs course",
    price: "2.4",
  },
  {
    name: "Complete ReactJs course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2.2",
  },
  {
    name: "Complete nodeJs course",
    price: "2.8",
  },
];

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const list = document.createElement("li");
    list.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    list.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    list.appendChild(span);

    ul.appendChild(list);
  });
}
generateLIST();

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateLIST();
});

const buttonHighToLow = document.querySelector(".sort-btn-high-to-low");

buttonHighToLow.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateLIST();
});
