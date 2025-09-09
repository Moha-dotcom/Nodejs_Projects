
const fs = require("fs/promises");
const path = require("path");

// const folder = "/Users/user/Downloads";
// const logFile = "log.txt";

// async function logMessage(message) {
//   const timestamp = new Date().toISOString();
//   await fs.appendFile(logFile, `${timestamp} ${message}\n`);
// }

// async function organizeDownloadFolder(folderName) {
//   try {
//     const files = await fs.readdir(folderName);

//     for (const file of files) {
//       const ext = path.extname(file).slice(1);
//       if (!ext) continue;

//       const targetDir = path.join(folderName, ext);
//       await fs.mkdir(targetDir, { recursive: true });
//       await logMessage(`Folder ensured: ${targetDir}`);

//       const src = path.join(folderName, file);
//       const dest = path.join(targetDir, file);

//       // Handle duplicates
//       let finalDest = dest;
//       if (await fs.stat(dest).catch(() => false)) {
//         const base = path.basename(file, path.extname(file));
//         finalDest = path.join(targetDir, `${base}-${Date.now()}.${ext}`);
//       }

//       await fs.rename(src, finalDest);
//       await logMessage(`Moved: ${file} -> ${ext}`);
//     }

//   } catch (err) {
//     console.error("Error organizing folder:", err);
//   }
// }

// console.log("Waiting......");
// organizeDownloadFolder(folder);






async function statsLearn() {
 
  // try {
  //     const stats = await fs.lstat("log.txt");

  // console.log("Size:", stats.size);
  // console.log("Is File?", stats.isFile());
  // console.log("Is Directory?", stats.isDirectory());
  //  console.log("Is Symbolic Link?", stats.isSymbolicLink());
  // }catch(err){
  //   console.l
  // og(err)
  // }

if (await fs.existsSync("log.txt")) {
  console.log("File exists!");
}




}


statsLearn()