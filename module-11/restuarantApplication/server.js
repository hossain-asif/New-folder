

// express 
const express = require('express');
const app = new express();

//db
const db = require('./db');

//body-parser
const bodyParser  =require('body-parser');
app.use(bodyParser.json());

//passport :for user authentication
const passport = require('./auth');

const Person = require("./models/Person");

//middleware function

const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);





app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session:false});

app.get('/',localAuthMiddleware,(req,res)=>{
    res.send("welcome to our hotel");
});


app.post('/person',localAuthMiddleware ,async (req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        console.log(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log("data not saved");
        res.status(500).json({error:"Internal server error"});
    }
});




app.get("/person", localAuthMiddleware ,async (req,res)=>{

    try{
        const data =await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log("data not fetched");
        res.status(500).json({error:"Internal server error"});
    }

});










//port 3000
app.listen(3000,(req,res)=>{
    console.log("server running...");
});
