

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schema/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);

//Get all the todos
router.get('/',async (req,res)=>{
    try{
        const data = await Todo.find({status: "active"}).select({
            _id:0,
            __v:0,
            date:0
        }).limit(2);

        res.status(200).json({
            result:data,
            message:"Successful"
        }); 


    }
    catch(err){
        res.status(500).json({
            error:"server side error!"
        });
    }
});



//Get a the todos
router.get('/:id',async(req,res)=>{
    
});



//post A todo
router.post('/', async (req,res)=>{
    try{
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(200).json({
            message:"Successful"
        }); 
    }
    catch(err){
        res.status(500).json({
            error:"server side error!"
        });
    }
});


//post multiple  todos
router.post('/all',async (req,res)=>{
    try{

        const data = req.body;
        await Todo.insertMany(data);
        // const response = await newTodo.save();
        res.status(200).json({
            message:"Successful"
        });

    }
    catch(err){
        res.status(500).json({
            error:"server side error!"
        });
    }
});


//put todos
router.put('/:id',async (req,res)=>{
    try{
        // await Todo.updateOne({_id: req.params.id},{
        //     $set: {
        //         status: 'active'
        //     }
        // });

        await Todo.findByIdAndUpdate({_id: req.params.id},{
            $set: {
                status: 'active'
            }
        },
        {
            useFindAndModify:false
        });

        res.status(200).json({
            message:"Successful"
        }); 
    }
    catch(err){
        res.status(500).json({
            error:"server side error!"
        });
    }
});


//Delete todos
router.delete('/:id',async (req,res)=>{
    try{
        await Todo.deleteOne({_id:req.params.id});

        res.status(200).json({
            message:"Successful"
        }); 


    }
    catch(err){
        res.status(500).json({
            error:"server side error!"
        });
    }
});


module.exports = router;
