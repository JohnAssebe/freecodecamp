let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result);
/* caret outside [] used to check the Starting String*/
// in [] used to negate

// search for pattern at the end of string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let lastresult = lastRegex.test(caboose);
console.log(lastresult);
/* $ used to search pattern at the end of string */
