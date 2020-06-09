let fruits = ["apple", "orange", "banana"];
console.log(fruits[0]); // apple

fruits.push("melon"); // Adds a new element ("melon") to fruits
console.log(fruits); // ["apple", "orange", "banana", "melon"]

fruits.pop(); // Removes the last element "melon"
console.log(fruits); // ["apple", "orange", "banana"]

fruits.shift(); // Removes the first element "apple" from fruits
console.log(fruits); // ["orange", "banana"]

fruits.unshift("lemon"); // Adds a new element "lemon" to fruits
console.log(fruits); // ["orange", "banana", "lemon"]

delete fruits[0]; // Delete first element "orange"

fruits.splice(2, 0, "kiwi", "mango");
console.log(fruits); // ["orange", "banana", "kiwi", "mango", , "lemon"]

fruits.splice(0, 1); // Removes the first element of fruits "orange"

fruits.sort(); //Sort array elements ["apple", "banana", "kiwi", "mango"]

let foods = ["milk", "bread"];
let shoppingCart = fruits.concat(foods); // Concatenation fruits with foods
console.log(shoppingCart); //["apple", "banana", "kiwi", "mango", "orange", "milk", "bread"]
