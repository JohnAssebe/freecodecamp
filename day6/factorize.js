function factorialize(num) {
  let fact = 1;
  for (let lst = num; lst > 1; lst--) {
    fact *= lst;
  }
  return fact;
}

console.log(factorialize(5));
