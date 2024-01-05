let quoteSample = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /\w+/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// \w shortcut is equal to [A-Za-z0-9_]
// regex is greedy by default
