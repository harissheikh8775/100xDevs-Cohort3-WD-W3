const fs = require("fs");

function print(err, data) {
    if (err) {
        console.log("File no found.");
    }
    else {
        console.log(data);
    }
}

fs.readFile("a.txt", "utf-8", print);