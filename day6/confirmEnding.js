function confirmEnding(str, target) {
  let endCheck = new RegExp(target + "$");
  return endCheck.test(str);
}

console.log(confirmEnding("Bastian", "n"));
