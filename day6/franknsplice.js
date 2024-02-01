function frankenSplice(arr1, arr2, n) {
  var arr = [...arr1];
  var arr_ = [...arr2];
  arr.push(...arr_.slice(n, arr_.length));
  arr_.splice(n, arr.length, ...arr);
  return arr_;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
