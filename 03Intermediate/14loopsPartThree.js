//For in and For of loops

//for of - it is used for arrays
const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

for (const n of names) {
  console.log(n);
}

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
};
//for in - it is used for objects
for (const n in symbols) {
  console.log(`Key is ${n} and value is ${symbols[n]}`);
}
