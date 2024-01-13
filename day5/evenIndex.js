var nums = [3, 8, 2, 5, 10, 7, 4];
// var evenIndexElements = nums.map((ele, _) => {
//   if (_ % 2 == 0) {
//     return ele;
//   }
//   return 0;
// });
// var sums = evenIndexElements.reduce((acc, current) => acc + current);
// console.log(sums);

// instead of iterating twice in the array
let sum = 0;
for (let i = 0; i <= nums.length; i = i + 2) {
  sum += nums[i];
}
console.log(sum);
