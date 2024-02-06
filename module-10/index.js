

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is Home page</h1>');
        res.end();
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is About page</h1>');
        res.end();
    }
    else if(req.url == '/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>This is Contact page</h1>');
        res.end();
    }
    else if(req.url == '/file-write'){
        fs.writeFile('demo.txt',"hello world",(error)=>{
            if(error){
                res.writeHead(200,{"content-type":"text/html"});
                res.write("Failed");
                res.end();
            }
            else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write("Success");
                res.end();   
            }
        })
    }
    
});
server.listen(5500);
console.log("server running...");





