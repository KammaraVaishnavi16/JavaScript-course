var s1 = 'vaishnavi"s';
var s2 = "vaishnavi's";
var s3 = `vaishu's and vaishu"s`; // the advantage of using back ticks is scaping
var name = `vaishnavi`;
var fullName = `${name} kammara`;
console.log(fullName.charAt(0));
console.log(fullName.includes("vaishnavi"));
console.log(fullName.endsWith("a"));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
