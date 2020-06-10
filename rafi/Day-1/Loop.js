// !use of loops

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

let a = 1;
while (a < 11) {
    console.log(a);
    a++;
}

let arr = ["red", "green", "blue"];

arr.forEach((element) => {
    console.log(element);
});

for (const key in arr) {
    console.log("Key:" + key + ", Value: " + arr[key]);
}

for (const iterator of arr) {
    console.log(iterator);
}
