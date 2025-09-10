const { read } = require("fs");
const path =  require("path");

const logFilePath = path.join(__dirname, "..", "..")
const fileToRead = `${logFilePath}/logFile.txt`


const fs = require("fs").promises;

 async function readLogs(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log(data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}


readLogs(fileToRead)