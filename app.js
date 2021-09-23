const {readFile} = require('fs');

//! PROMISES
const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile('./content/first.txt', 'utf8', (err, data)=>{
            if(err){
                reject(err);
                
            }
            else{
                resolve(data);
            }
            })
    })
}

// readFile('./content/first.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log(data);
//     }
// })

getText('./content/first.txt')
    .then(result => console.log(result))
    .catch((err) => console.log(err))