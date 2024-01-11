let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin|Franklin D.) Roosevelt/;
let result = myRegex.test(myString);
console.log(result);
