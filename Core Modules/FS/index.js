const fs = require("fs");

// lesson
fs.writeFileSync(
  "notes.txt",
  "Wohoo, this is so cool, I can create text file using fs node module."
);

// challenge
fs.appendFileSync(
  "notes.txt",
  "\r\n \r\nWohoo, and using appendFileSync method I can append some text to existing text."
);
