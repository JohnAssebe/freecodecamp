var s = "A man, a plan, a canals: Panama";
regex = /\w+/g;
var sentenceCharacters = s.match(regex).join("").toLowerCase();
var left = 0;
var right = sentenceCharacters.length - 1;
var palindrome = true;
while (left <= right) {
  if (sentenceCharacters[left] != sentenceCharacters[right]) {
    console.log("✌️sentenceCharacters[left] --->", sentenceCharacters[left]);
    console.log("✌️sentenceCharacters[right] --->", sentenceCharacters[right]);
    palindrome = false;
    break;
  }
  left++;
  right--;
}
console.log(palindrome ? "palindrome" : "not palindrome");
