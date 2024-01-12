const primeSum = (num1, num2) => {
  var primes = [];
  for (let i = num1 == 1 ? 2 : num1; i < num2; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) primes.push(i);
  }
  var sum = primes.reduce((acc, current) => acc + current, 0);
  return sum;
};
console.log(primeSum(1, 10));
