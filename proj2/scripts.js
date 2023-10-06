//getComputedStyle - to get backgroud colors like that

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//to know the background color

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(getBGColor(orange));

// var orangeElementColor = getBGColor(orange);
// var pinkElementColor = getBGColor(pink);
// var violetElementColor = getBGColor(violet);
// var cyanElementColor = getBGColor(cyan);
// var redElementColor = getBGColor(red);

// orange.addEventListener("mouseenter", () => {
//   center.style.background = orangeElementColor;
// });

// pink.addEventListener("mouseenter", () => {
//   center.style.background = pinkElementColor;
// });

// violet.addEventListener("mouseenter", () => {
//   center.style.background = violetElementColor;
// });

// cyan.addEventListener("mouseenter", () => {
//   center.style.background = cyanElementColor;
// });

// red.addEventListener("mouseenter", () => {
//   center.style.background = redElementColor;
// });

const magicColorChanger = (element, color) => {
  element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

console.log(magicColorChanger(orange, getBGColor(orange)));
console.log(magicColorChanger(pink, getBGColor(pink)));
console.log(magicColorChanger(violet, getBGColor(violet)));
console.log(magicColorChanger(red, getBGColor(red)));
console.log(magicColorChanger(cyan, getBGColor(cyan)));
