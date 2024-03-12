

const userModel = require('../model/userModel');
const todoModel = require('../model/todoModel');
const jwt = require('jsonwebtoken');



exports.registration = async (req,res)=>{
    
    try{
        let reqBody = req.body;
        await userModel.create(reqBody);
        res.json({status:"Success",message:"Registration Completed"});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};


exports.login = async (req,res)=>{
    try {
        
        let reqBody = req.body;
        let user = await userModel.find(reqBody);
        if(user.length>0){
            let payload = {
                exp:Math.floor(Date.now()/1000)+(7*24*60*60),
                data:reqBody['email']
            };

            let token = jwt.sign(payload,'1234');
            res.json({status:"success",message:"user found",token:token});
        }
        else{
            res.json({status:"fail",message:"No user found"});
        }

    } catch (err) {

        res.json({status:"Fail",message:err});
    }
};



exports.profileUpdate =async (req,res)=>{


    try{
        // const {id} = req.params;
        let email = req.headers['email'];
        let reqBody = req.body;
        await userModel.updateOne({email:email},reqBody);
        res.json({status:"Success",message:"Update successfully"});
    }catch(err){
        res.json({status:"Fail",message:err});
    }

};


exports.profileDetails =async (req,res)=>{

    try{
        let email = req.headers['email'];


        let result = await userModel.find({email:email});
        console.log(result);

        res.json({status:"Success",data:result});
    }catch(err){
        res.json({status:"Fail",message:err});
    }

    
};




