
const taskModel = require('../model/taskModel');



exports.taskCreate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
       
        let reqBody = req.body;
        reqBody.email = email;

        await taskModel.create(reqBody);

        res.json({status:"Success",message:"task created."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.taskUpdate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let reqBody = req.body;

        let {id} = req.params;
        

        await taskModel.updateOne({_id:id,email:email},reqBody);

   

        res.json({status:"Success",message:"Updated successfully."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.taskDelete = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let {id} = req.params;



        await taskModel.deleteOne({_id:id,email:email});

        res.json({status:"Success",message:"task deleted."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.taskShow = async (req,res)=>{
    
    try{
        let email = req.headers['email'];

        let data = await taskModel.find({email:email});

        res.json({status:"Success",data:data});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
