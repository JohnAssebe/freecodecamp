const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const total = sum(1, 2, 3, 4, 5, 6, 7);
console.log(total);
