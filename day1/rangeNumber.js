function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum + 1) return [];
  else {
    var rangeArray = rangeOfNumbers(startNum + 1, endNum);
    rangeArray.unshift(startNum);
    return rangeArray;
  }
}

console.log(rangeOfNumbers(1, 5));
