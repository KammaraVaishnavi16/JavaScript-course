//we will learn about two events in java script :
// SetTimeout(function,milliseconds) - after the set time the corresponding program will start
//setInterval(function,milliseconds) -  the program will happen within the given interval

//to duplicate to multiple line shortcut - shift+alt+downward arrow
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);

setTimeout(() => {
  followers.innerText = "Followers on Instagram!";
}, 4200);
