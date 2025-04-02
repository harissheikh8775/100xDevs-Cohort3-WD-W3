const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, content1) {
    console.log(content1);
});

fs.readFile("b.txt", "utf-8", function (err, content2) {
  console.log(content2);
});

// Start all 3 tasks together, and wait for them to finish. 