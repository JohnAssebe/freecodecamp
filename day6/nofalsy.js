function bouncer(arr) {
  var nofalsy = arr.filter((ele) => ele && ele);
  return nofalsy;
}

bouncer([7, "ate", "", false, 9]);
