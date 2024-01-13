var nums = [2, -3, 5, -4, -2];
var negatives = nums.filter((ele) => ele < 0);
var result = negatives.reduce((acc, curr) => acc * curr);
console.log(result);
