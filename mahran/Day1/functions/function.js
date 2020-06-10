let fahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

let temp70 = fahrenheitToCelsius(70);
console.log(temp70);

let temp32 = fahrenheitToCelsius(32);
console.log(temp32);

// function return an object
let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

let temps = convertFahrenheit(74);

console.log(temps);
