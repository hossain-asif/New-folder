

//5

const http =require('http');

let server = http.createServer((req,res)=>{
    res.end('Minhaz Hossain Asif');
});

server.listen(5050);

console.log('Server Run Success');