let username = "c57bT3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+\d*$/i;
let result = userCheck.test(username);
console.log(result);

// question

// Usernames can only use alphanumeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
