

const path = require("path");
// const fs = require("fs");
const fs = require("fs");
const { time } = require("console");


const pathDir =  path.join(__dirname, "..");
const logFilePath = path.join(__dirname, "..", "..")



 function watchAllFolder(pathDir) {
     fs.watch(pathDir, (eventType, filename) => {
        console.log(filename)
        if (filename) {
           let data = `Date Modified : 🔄${new Date().toDateString()}, Time Modified: ${new Date().toTimeString()} Change detected in ${path.join(pathDir, filename)}: ${eventType}`
            
         //   Next Step is: Create a text File and Write All the Logs and Dates and Time of the Logs
         fs.appendFile(`${logFilePath}/logFile.txt`, `${data}\n`, (err) => {
            if(err) throw err
            console.log('The "data to append" was appended to file!');

         })
           
        }
    });
    // Reading Directory and Looping through it to watch changes
     fs.readdir(pathDir, { withFileTypes: true },  (err, files)=>{
        if(err) {
             console.error("Error reading directory:", err);
            return;
        }
           files.forEach((file) => {
            //Check if the file is directory
        if(file.isDirectory()){
            const fullPath = path.join(pathDir, file.name)
            watchAllFolder(fullPath);
        }
           })
    });
}


watchAllFolder(pathDir)






