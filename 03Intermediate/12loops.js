//loops
//break and continue keywords
//while and do while

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Rajasthan",
  "Andhra Pradesh",
  "Tamil Nadu",
  1947,
  "Delhi",
  "Mumbai",
];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] != "string") continue;
  console.log(myStates[i]);
}

console.log(
  ".......................The below is the break condition answer........................"
);
for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] != "string") break;
  console.log(myStates[i]);
}

// looping through while loop
console.log("...........looping through while loop..........");
let i = 0;
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

let j = 0;
console.log("...........looping through do while loop.........");
do {
  console.log(myStates[j]);
  j++;
} while (j < myStates.length);
