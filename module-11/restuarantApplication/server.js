

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

//schema
const Person = require("./models/Person");

//jwt token
const {jwtAuthMiddleware, generateToken} = require('./jwt');

//dotenv
require('dotenv').config();



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





app.post('/signup', async (req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        console.log(data);
        const response = await newPerson.save();
        console.log("data saved");

        const payload = {
            id: response.id,
            username: response.username
        }

        const token = generateToken(payload);
        console.log("Token is: " + token);

        
        res.status(200).json({response: response,token: token});
    }
    catch(err){
        console.log("data not saved");
        res.status(500).json({error: err});
    }
});

app.post('/login', async (req,res)=>{
    try{
        const {username, password} = req.body;
        
        
        const user = await Person.findOne({username:username});

        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error: 'Invalid username or password'});
        }

        const payload = {
            username: user.username
        }
        const token = generateToken(payload);
        console.log("Token is: " + token);

        
        res.status(200).json({token: token});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error: "Internal Server Error"});
    }
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




app.get("/person", jwtAuthMiddleware ,async (req,res)=>{

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
