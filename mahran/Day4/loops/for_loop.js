// Write a program to print even number betweetn 0 and n
let n = prompt("Enter the number", "");
function isEven(num) {
  let last_value = parseInt(num);
  for (let i = 0; i < last_value; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

isEven(n);
