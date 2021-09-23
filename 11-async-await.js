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

const start = async() =>{
    const first = await getPath('./content/first.txt');
    console.log(first);
} 
start()