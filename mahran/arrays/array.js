//Empty array
const emptyArray = [];

//Array of numbers
const numbers = [10, 23, 11.5, -20];

//Array of mixed types
const data = ["Joe", 12345, true, "male"];

let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]); // print first element "apple"

console.log(fruits[fruits.length - 1]); // print last element "banana"
let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]); // print first element "apple"

// print array elements using for loop
console.log("print array elements using for loop");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// print array elements using map function
console.log("print array elements using map");
fruits.map((fruit) => console.log(fruit));

// print array elements using for of
console.log("print array elements using for of loop");
for (let fruit of fruits) {
  console.log(fruit);
}
