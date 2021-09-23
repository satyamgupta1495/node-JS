const {readFile} = require('fs')

const getPath = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, data) =>{
            if (err) {
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


getPath('./content/first.txt')
.then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.log('error occured'  +err);
})