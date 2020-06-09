// write a program to convert the Tempreture from fehrenheit to celisues
let fehrenheit = prompt("Enter the Tempreture in Fehrenheit", 32);

let celisues = Math.round(((Number(fehrenheit) - 32) * 5) / 9);

alert(`The equivelent Temp in Celisues ${celisues}`);
