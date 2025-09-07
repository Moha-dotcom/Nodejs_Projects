const { log } = require("console");
const fs = require("fs");
const path = require("path");


async function logEvent(message){
    const date = new Date();
    const folderName = path.join(__dirname, "logs");
    const fileName = path.join(folderName, date.toISOString().split("T")[0] + ".txt")

    if(!fs.existsSync(folderName)) fs.mkdirSync(folderName);
    const log = `[${date.toISOString()}] ${message}\n`;
    fs.appendFileSync(fileName, log)
    console.log("Logged:", message)
}

logEvent("User Created")