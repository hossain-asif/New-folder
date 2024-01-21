

// 5
// const http =require('http');

// let server = http.createServer((req,res)=>{
//     res.end('Minhaz Hossain Asif');
// });

// server.listen(5050);

// console.log('Server Run Success');


//6
// const http =require('http');

// let server = http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>This is Home page</h1>');
//         res.end();
//     }
//     else if(req.url == '/about'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>This is about page</h1>');
//         res.end();
//     }
//     else if(req.url == '/contact'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>This is contact page</h1>');
//         res.end();
//     }
// });
// server.listen(5050);
// console.log('Server Run Success');


//9
// const http = require('http');
// const url = require('url');

// let server = http.createServer((req,res)=>{
//     let myUrl = "https://www.youtube.com/watch?v=Xg4effPSJXk&list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&index=8";

//     let urlObject = url.parse(myUrl,true);

//     let urlhostName = urlObject.host;
//     let urlPathName = urlObject.pathname;
//     let urlSearch = urlObject.search;


//     res.writeHead(200,{'content-type':'text/html'});
//     res.write('host: ' + urlhostName + "<br>");
//     res.write('path: ' + urlPathName + "<br>");
//     res.write('search query: ' + urlSearch + "<br>");

//     res.end();

// });
// server.listen(5050);
// console.log('Server Run Success');



//14:

// const fs = require('fs');
// const http = require('http');

// let server = http.createServer((req,res)=>{

//     if(req.url=='/'){
//         fs.readFile('home.html',(err,data)=>{
//             res.writeHead(200,{'content-type' : 'text/html'});
//             res.write(data);
//             res.end();

//         });

//     }

// });

// server.listen(4040);
// console.log("Server Run Success")


//15

// const fs = require('fs');
// const http = require('http');


// let server = http.createServer((req,res)=>{

//     let data = fs.readFileSync('home.html');
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(data);
//     res.end();
// });

// server.listen(4000);
// console.log("Server Run success");



//16

// const fs = require('fs');
// const http = require('http');

// let server = http.createServer((req,res)=>{
//     if(req.url=="/"){
//         fs.writeFile('demo.txt','Minhaz Hossain Asif',function (error){
//             if(error){
//             res.writeHead(200,{'content-type':'text/html'});
//             res.write("File write failed");
//             res.end();
//             }
//             else{
//                 res.writeHead(200,{'content-type':'text/html'});
//                 res.write("File write success");
//                 res.end();                
//             }
//         });
//     }

// });

// server.listen(5050);
// console.log("server running"); 


//1

const fs = require('fs');
const http = require('http');

let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        let error = fs.writeFileSync('demoSync.txt','Minhaz Hossain asif from Chittagong');

        if(error){
            res.writeHead(200,{'content-type':'text/html'});
            res.write("File write failed");
            res.end();
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.write("File write success");
                res.end();                
            }
    }

});

server.listen(5050);
console.log("server running"); 