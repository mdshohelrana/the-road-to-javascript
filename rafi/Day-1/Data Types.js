//! primitive data types
let num = 10;
let result = true;
let str = "This is a string data type";
let a = null;
let b = undefined;

//! Nonprimitive data types

// this is object type
let obj = {
    name: "Rafi",
    email: "rafi@gmail.com",
};

// function type
function sayHello() {
    console.log("Hello");
}
sayHello();

// array type
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["red", "green", "blue"];
let mixArray = [1, true, "str", null, undefined];

console.log(numberArray[3]);
console.log(stringArray[3]);
console.log(mixArray[3]);
