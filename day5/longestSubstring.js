var s = "abcabcbb";
var long = 0;
for (let i = 0; i < s.length; i++) {
  var subarr = [];
  var substring = 0;
  for (let k of s.slice(i, s.length)) {
    if (subarr.includes(k)) {
      break;
    }
    substring++;
    subarr.push(k);
  }
  long = Math.max(long, substring);
}

console.log(long);
