var nums = [2, -4, 6, -8, 10, -12, 14];
var positives = nums.filter((element) => element > 0);
var sum = positives.reduce((acc, current) => acc + current);
console.log(sum);
