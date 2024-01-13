var nums1 = [2, 4, 2, 6, 8, 10];
var nums2 = [5, 2, 8, 3, 4];
var intersections = nums1.filter((ele) => nums2.includes(ele));
console.log([...new Set(intersections)]);
