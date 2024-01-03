const s = [5, 7, 2];
function editInPlace() {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] > s[j]) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
      }
    }
  }
}
editInPlace();
