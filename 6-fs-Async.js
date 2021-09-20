const {readFile, writeFile} = require('fs');

//! Async function works on callBACK;
//? callback ? we run callback funtion when we are done

readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    console.log(result);
    writeFile('./content/result_async', `Here is the result : ${first}`, (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
    
        console.log(result);
    })
    
});




