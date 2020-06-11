const calculator = (operator) => {
  const first_number = parseFloat(document.getElementById("num1").value);
  const second_number = parseFloat(document.getElementById("num2").value);
  let result = "";
  switch (operator) {
    case "+":
      result = first_number + second_number;
      break;
    case "-":
      result = first_number - second_number;
      break;
    case "*":
      result = first_number * second_number;
      break;
    case "/":
      result = first_number / second_number;
      break;
    case "%":
      result = first_number % second_number;
      break;
  }
  document.getElementById("result").value = String(result);
};
