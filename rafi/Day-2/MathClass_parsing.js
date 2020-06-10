let arr = [];
for (let index = 0; index < 5; index++) {
    arr.push(Math.round(Math.random() * 10 + 1));
}
console.log(arr);

console.log(Math.floor(10.5));
console.log(Math.ceil(10.5));
console.log(Math.round(10.5));

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(10));

let str = "10.25";
let num = parseInt(str);
console.log(num);

num = parseFloat(str);
console.log(num);

let str2 = "100";
let fltStr = "100.21";
let nanStr = "bye";

console.log(parseFloat(str2));
console.log(parseFloat(fltStr));
console.log(parseFloat(nanStr));
