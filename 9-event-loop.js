//! Event loop

const { readFile } = require("fs");

console.log("Starting First task");

readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
 const file = result;
    console.log("Reading file");
    console.log(file);
})

console.log("Next task");