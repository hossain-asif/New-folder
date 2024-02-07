


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

//3

const express = require('express');
let app = new express();

app.get('/',(req,res)=>{
    res.send("Home Page");
});

app.put('/contact',(req,res)=>{
    res.send("contact Page");
});
app.post('/terms',(req,res)=>{
    res.send("terms Page");
});
app.delete('/about',(req,res)=>{
    res.send("about Page");
});


app.listen(8000,()=>{
    console.log("server running...");
});