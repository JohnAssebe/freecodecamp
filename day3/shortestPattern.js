// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/;
// let result = text.match(myRegex);
// console.log(result);
// greedy match

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; 
let result = text.match(myRegex);
console.log(result)
// return the shortest possible match use ?  

