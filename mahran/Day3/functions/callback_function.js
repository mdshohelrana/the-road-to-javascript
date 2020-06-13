const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//check if number is odd or not
const isOdd = (number) => (number % 2 !== 0 ? "Odd number" : "Not odd Number");

const checkNumber = (numbers, isOdd) => {
  for (let number of numbers) {
    console.log(`${number} is ${isOdd(number)}`);
  }
};

checkNumber(numbers, isOdd);
