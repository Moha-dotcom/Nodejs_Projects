const fs = require("fs");
const path = require("path");


const filePath = path.join(__dirname, "todos.txt");

// Add task to a file
function addTask(task){
    const line = `${task}\n`;
    let count = 0;
    // check if file exists before creating or appending 
    if(!fs.existsSync(filePath)) fs.writeFileSync(filePath, line);
     // add tasks to existing file
    else fs.appendFileSync(filePath, line);


    console.log(`${count++} : Task added: ${task}`)
}

// List all Task in File

function listTasks() {
    if(!fs.existsSync(filePath)){
        console.log("No tasks found.")
    }
    //read all tasks for display
    const tasks = fs.readFileSync(filePath, "utf-8");
    console.log(tasks)
}

// addTask("Buffer Elements when Needed")
listTasks()