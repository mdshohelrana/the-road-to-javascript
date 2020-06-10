let now = new Date();

const getFullTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  setTimeout(getFullTime, 1000);
};

function checkTime(i) {
  // add zero in front of numbers < 10
  return (i = i < 10 ? "0" + i : i);
}

const getFullDate = () => {
  const day = now.getDate("August 19, 1975 23:15:30");
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  document.getElementById(
    "fullDate"
  ).textContent = `Today is: ${day}/${month}/${year}`;
};

getFullDate();
