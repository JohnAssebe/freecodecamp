let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);

// note this fact
// "string".match(/regex/);
// /regex/.test("string");
