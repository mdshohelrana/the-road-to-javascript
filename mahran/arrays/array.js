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
