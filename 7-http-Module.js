const http = require('http');

// const server = http.createServer((req, res) =>{
//     res.write("WELOCOME TO OUR HOMEPAGE");
//     res.end();
// });

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end("WELOCOME TO OUR HOMEPAGE");
    }
    if(req.url === '/about'){
        res.end("WELOCOME TO ABOUT PAGE");
    }
    res.end(`<h1> OPPS! Seems you are lost </h1>`);
});


server.listen(5000);
