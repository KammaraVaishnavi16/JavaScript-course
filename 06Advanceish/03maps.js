//map -

var myMap = new Map();

//map has lot of properties :
// maps are not objects, they are completely different from objects
myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`Key is ${key} and value is ${myMap.get(key)}`);
}

for (let value of myMap.values()) {
  console.log(`value is ${value}`);
}

for (let [key, value] of myMap) {
  console.log(`key is : ${key} and value is : ${value}`);
}

//foreach loop gives you value and not keys
myMap.forEach((value) => console.log(`${value}`));

//if you want key then :
myMap.forEach((v, k) => console.log(`value is ${v} and key is ${k}`));

myMap.delete(2);
console.log(myMap);
