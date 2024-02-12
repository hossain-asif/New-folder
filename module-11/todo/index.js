

const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require("./routes/todoHandler");

//express app initialization
const app = express();
app.use(express.json());



//database connection with mongoose

mongoose.connect("mongodb://localhost/todos",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("connection successful"))
    .catch((err)=>console.log(err));


//application routes
app.use('/todo',todoHandler);



//default error handler
function errorHandler(err,req,res,next){
    if(req.headersSent){
        return next(err);
    }
    res.status(500).json({ err });
}



app.listen(3000,()=>{
    console.log("Server Running...");
});