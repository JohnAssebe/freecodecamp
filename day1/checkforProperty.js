function checkObj(obj, checkProp) {
  var result = "";
  result = obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  return result;
}
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));
