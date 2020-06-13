// using the ECMAScript 2015 arrow notation function return sequare of number
const square = (number) => number * number;

console.log(square(4)); // calculate square of 4 and return "16"

//function calculate area of circle
const PI = 3.14;
const circle_area = (r, PI) => {
  const area = r * r * PI;
  return area;
};

console.log(circle_area(3));
