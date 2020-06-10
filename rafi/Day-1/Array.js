let arr = [1, 2, 3, 4];

console.log("Array length: " + arr.length);
console.log("Value at index 2 is: " + arr[2]);

//print all array element and use of loop
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

arr.push(5);
console.log(arr);

console.log(arr.pop());
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

//copy array
let newArray = [...arr];
console.log(newArray);

// array slice
newArray = arr.slice(1, 3);
console.log(newArray);

newArray = arr.splice(2, 1);
console.log(newArray);
