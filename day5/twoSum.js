var nums = [2, 7, 11, 15];
var target = 9;
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < i; j++) {
    if (nums[i] + nums[j] == target) {
      console.log([i, j]);
    }
  }
}
