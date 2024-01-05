let movieNam = "2001: A Space Odyssey";
let NumRegex = /\d/g;
let res= movieNam.match(NumRegex).length;
console.log(res);

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
console.log(result);
