const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value == "") return delete records[id][prop];
  if (prop == "tracks") {
    const tracksValue = [...(records[id][prop] || [])].concat(
      Array.isArray(value) ? [...value] : value
    );
    records[id][prop] = tracksValue;
  } else records[id][prop] = value;
  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection);
