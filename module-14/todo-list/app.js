

const express = require('express');
const router = require('./src/route/api.js');
const app = new express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

// Cors Open
app.use(cors());

//Security Implementation
app.use(helmet());
app.use(hpp());
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));

let limiter = rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);



//Database connection
let URL = "mongodb://localhost:27017/todolist";
let OPTIONS = { autoIndex: true }; // Omit user and pass if not using authentication

mongoose.connect(URL, OPTIONS)
    .then(() => {
        console.log("Database connection established");
    })
    .catch((err) => {
        console.error("Connection error:", err);
    });




//Route Implement
app.use("/api",router);



module.exports = app;