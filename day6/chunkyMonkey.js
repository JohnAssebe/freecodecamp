function chunkArrayInGroups(arr, size) {
  var arrs = [];
  var i = 0;
  while (i < arr.length) {
    arrs.push(arr.slice(i, i + size));
    i += size;
  }
  return arrs;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
