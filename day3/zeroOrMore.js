let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
// ["goooooooo"], ["g"], and null results match zero or more characters starts with g and o in the greedest way 

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);
console.log(result);