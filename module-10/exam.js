


const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Hello This is Node Js Server!</h1>');
        res.end();
    }
});
server.listen(5000);
console.log("server running...");