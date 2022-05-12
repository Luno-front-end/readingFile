const fs = require("fs");
const path = "./testing.txt";

//start value years old
let years = 0;

//record a text in file, and recording new line, new number years old
function recordTextFile() {
  const lol = (years += 1);
  const text = `I'm ${lol} years old. And you?\n`;

  return text;
}

// reading a line and checking the number of rows. Output the required number of lines in the presence of 1 to 3 lines
function readLine() {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) return console.log(err);
    const fileLength = data.split("\n").length;
    switch (fileLength - 1 > 0) {
      case fileLength - 1 === 1:
        const oneLine = [data.split("\n")[fileLength - 2]];
        console.log("oneLine", oneLine);
        break;
      case fileLength - 1 === 2:
        const twoLine = [
          data.split("\n")[fileLength - 2],
          data.split("\n")[fileLength - 3],
        ];
        console.log("twoLine", twoLine);

        break;
      case fileLength - 1 >= 3:
        const threeLine = [
          data.split("\n")[fileLength - 2],
          data.split("\n")[fileLength - 3],
          data.split("\n")[fileLength - 4],
        ];
        console.log("threeLine", threeLine);

        break;
      default:
        console.log("файл еще не был создан, либо строки отсутствуют");
        break;
    }
  });
}

// start interval reading file and create new line
function editFile() {
  setInterval(() => {
    readLine();
    fs.appendFileSync(path, recordTextFile(), (err) => {
      console.log(err);
    });
  }, 2500);
}

// create file if him not
function createFile() {
  fs.writeFile(path, recordTextFile(), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Файл создан");
    }
  });
}

try {
  if (fs.existsSync(path)) {
    editFile();
  } else {
    createFile();
    readLine();
    editFile();
  }
} catch (err) {
  console.error(err);
}
