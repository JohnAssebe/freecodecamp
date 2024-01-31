function reverseString(str) {
  let reverse = [];
  str.split("").map((chr) => reverse.unshift(chr));
  return reverse.join("");
}

console.log(reverseString("hello"));
