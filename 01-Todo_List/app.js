const { dir } = require("node:console")
const fs = require("node:fs")





async function createDirectory(dir) {
    fs.mkdir(dir, () => {
        for(let i = 0; i <= 10; i++){
            fs.writeFile(`${dir}/data${i}.txt` , "Heloo", () => {
                // console.log(`Wrting on file data${i}.txt`)
            })
        }
    })
}

createDirectory("Director")



async function ListAllDirectory(dirLocal, fileToDelete) {
    fs.readdir(dirLocal, (err, files) => {
        files.map((file) => {
            if(file === fileToDelete){
                fs.rm(fileToDelete, {recursive : true}, () => {
                    // console.log(`Delete with the name ${fileToDelete}`)
                })
            }
        })
    }) 


}



async function CheckExists(dir, dirLocal, fileTodelete) {
    if(fs.existsSync){
        console.log(`${dir} exists` )
        createDirectory(dir)
    }else{
        ListAllDirectory(dirLocal, fileTodelete)
        console.log(`${fileTodelete} doesnt exist`)
    }
    
}


CheckExists( )


// ListAllDIR('.', "Director")