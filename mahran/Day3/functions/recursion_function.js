function loop(x) {
  if (x > 0) {
    console.log(x);
    loop(x - 1);
  }
}

loop(7);

//using ES6 arrow fn
const loop_x = (x) => {
  if (x > 0) {
    console.log(x);
    loop_x(x - 1);
  }
};

loop_x(10);
