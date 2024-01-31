function findLongestWordLength(str) {
  var wordlengths = str.split(" ").map((wrd) => wrd.length);
  return Math.max(...wordlengths);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
