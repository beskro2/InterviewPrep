/*question from data Annotation
read data from a text file all info on the file is formatted this way
3 love
6 computers
2 dogs
4 cats
1 I
5 you

Using this pater print the words that corelate with the leftmost number of each line

          1
         2 3
        4 5 6

The outcome of this would be

I love computers

*/

const fs = require("fs");

function decode(message_file) {
  try {
    //reads in data from file
    const data = fs.readFileSync(message_file, "utf8");
    //splites data into lines
    const lines = data.split("\n");
    const map = new Map();
    //maps those lines into map using the first value as key and second value as the value
    lines.forEach((line) => {
      const [key, value] = line.trim().split(" ");
      map.set(parseInt(key), value);
    });
    //to find the left most number of a line you can add what line its on to the leftmost number of the previous line
    let line = 1; //line we are trying to find leftmost number of
    let endval = 0; //leftmost number of previous line
    let awn = "";

    while (endval < map.size) {
      endval += line; //add line to leftmost number
      awn += " " + map.get(endval); //get word from map at leftmost numbers index and add it to the string awn
      line++; //inclease line
    }

    return awn;
  } catch (err) {
    console.error("error file connection:", err);
    return null;
  }
}

let test = decode("coding_qual_input.txt");
console.log(test);

/* keep in mind the text format has to be that way. A line must have exactly 2 pieces of data on it. 
Surround reading file in catch throw so if the text file given is unknown than it wont crash the project

*/
