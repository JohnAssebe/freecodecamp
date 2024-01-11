var whatisanEmail =
  "this is John Assebe Email address johnassebe@gmail.com or john.doe@gmail.com or john@example.com john@example2.computer";
let emailregex = /\b[\w.]*@\w+\.(com|net|org)\b/gi;
let result = whatisanEmail.match(emailregex);
console.log(result);
