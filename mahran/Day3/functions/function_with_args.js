function sum(...args) {
  const res = args.reduce((current, prev) => current + prev, 0);
  console.log(`The total sum of ${args}= ${res}`);
}

sum(1, 2, 3, 4);
sum(1, 2);
