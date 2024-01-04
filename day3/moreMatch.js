let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result);
// global flag (g) To search or extract a pattern more than once,
// ignore case (i) to avoid case sensativity in looking
