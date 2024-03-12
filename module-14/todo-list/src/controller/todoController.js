


const todoModel = require('../model/todoModel');



exports.todoCreate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
       
        let reqBody = req.body;
        reqBody.email = email;

        await todoModel.create(reqBody);

        res.json({status:"Success",message:"todo created."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.todoUpdate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let reqBody = req.body;

        let {id} = req.params;
        

        await todoModel.updateOne({_id:id,email:email},reqBody);

   

        res.json({status:"Success",message:"Updated successfully."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.todoDelete = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let {id} = req.params;



        await todoModel.deleteOne({_id:id,email:email});

        res.json({status:"Success",message:"todo deleted."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.todoShow = async (req,res)=>{
    
    try{
        let email = req.headers['email'];

        let data = await todoModel.find({email:email});

        res.json({status:"Success",data:data});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
