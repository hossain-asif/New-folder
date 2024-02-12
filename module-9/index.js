


// const app = require("./app");



// app.listen(5070,()=>{
//     console.log("Server running");
// });



// 2
// let express = require('express');

// let app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello express js");
// });


// app.listen(8000,function(){
//     console.log("Server Run Success....");
// });

//3,4,5,6.7

const express = require('express');
let app = new express();

app.get('/',(req,res)=>{
    res.send("Home Page"); // indicates response's body
});

app.put('/contact',(req,res)=>{
    res.end("contact Page");  //indicates response's end situation
});
app.post('/terms',(req,res)=>{
    res.send("terms Page");
});
app.delete('/about',(req,res)=>{
    res.send("about Page");
});

//response status code
app.get('/three',(req,res)=>{
    res.status(401).end("Unauthorized");
});

//response jason format
app.get('/four',(req,res)=>{
    
    let myJson = [
        {
            name:"A",
            Roll:2011,
            work:"Student"
        },

        {
            name:"B",
            Roll:2011,
            work:"Student"
        },

        {
            name:"C",
            Roll:2011,
            work:"Student"
        }
    ];

    res.json(myJson);
});

// response download
app.get('/five',(req,res)=>{
    res.download("./asif.jpg");
});

//response redirect
 app.get("/A",(req,res)=>{
    res.redirect("http://localhost:8000/B");
});
app.get("/B",(req,res)=>{
    res.send("This is Joke");
});

//header append
app.get('/six',(req,res)=>{
    res.append("Name","Asif");
    res.append("roll","2011");
    res.append("place","JU");

    // res.send("header append successful");
    res.status(201).end("append successful");
});

//cookie
app.get('/seven',(req,res)=>{
    res.cookie("Name","Asif");
    res.cookie("Roll","2011");
    res.cookie("Place","JU");
    res.end("cookie set success");
});

//clear cookie
app.get("/eight",(req,res)=>{
    res.clearCookie("Name");
    res.clearCookie("Roll");
    res.clearCookie("Place");
    res.end()
});

app.get("/nine",(req,res)=>{

    let fname = req.query.fname;
    let lname = req.query.lname;    
    
    res.end(fname +" "+ lname);

});

app.get("/ten",(req,res)=>{
    let a = req.header("fname");
    let b = req.header("lname");

    res.end(a +" "+ b);
});


app.post('/post_one',(req,res)=>{
    let name = req.query.name;
    let roll = req.query.roll;


    let headerName = req.header('fname');

    // res.send("query:" + name + " " + roll);
    res.end("header:" + headerName);
    
});



let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/post_two',(req,res)=>{

    let JSONString = req.body;
    let a = JSON.stringify(JSONString);
    res.send(a);    
});


let Multer = require('multer');
let multer = Multer();
app.use(multer.array());
app.use(express.static('public'));
app.post('/post_three',(req,res)=>{

    let reqBody = req.body;
    res.send(JSON.stringify(reqBody));
});

app.listen(8000,()=>{
    console.log("server running...");
});