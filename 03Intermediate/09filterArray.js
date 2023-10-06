//Fill and Filter in Array and slice and splice

var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(testArray.fill("h", 2, 5));

//filter - filter actually expects you to pass a call back
const myNumber = [23, 24, 25, 26, 27, 28, 29, 30];
const result = myNumber.filter((element) => element != 24);
console.log(result);

//slice and splice
//when ever we are passing up a range the first value, the start point is inclusive and the end point/range is exclusive

var users = ["tim", "tom", "jon", "son", "von"];
console.log(users.slice(1, 4));
console.log(`after slicing the users are ${users}`);
//splice - splice(startIndex,count,value); - based on the count it delets the values from that stat index and insert the value which we passed
users.splice(1, 3, "hey", "there");
console.log(users);
