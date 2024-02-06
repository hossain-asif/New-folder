// let express = require('express');

// let app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello express js");
// });


// app.listen(8000,function(){
//     console.log("Server Run Success....");
// });


const app = require("./app");



app.listen(5070,()=>{
    console.log("Server running");
});