function titleCase(str) {
  var words = str.split(" ");
  var capitalized = words.map(
    (wrd) => wrd[0].toUpperCase() + wrd.slice(1, wrd.length).toLowerCase()
  );
  return capitalized.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
