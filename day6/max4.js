function largestOfFour(arr) {
  var maxs = [];
  arr.map((sub) => maxs.push(Math.max(...sub)));
  return maxs;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
