const fs = require("fs");

function decode(message_file) {
  try {
    const data = fs.readFileSync(message_file, "utf8");
    const lines = data.split("\n");
    const map = new Map();
    lines.forEach((line) => {
      const [key, value] = line.trim().split(" ");
      map.set(parseInt(key), value);
    });

    let line = 1;
    let endval = 0;
    let awn = "";
    while (endval < map.size) {
      endval += line;
      awn += " " + map.get(endval);
      line++;
    }

    return awn;
  } catch (err) {
    console.error("error file connection:", err);
    return null;
  }
}

let test = decode("coding_qual_input.txt");
console.log(test);
