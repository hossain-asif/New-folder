const UsersModel = require("../model/usermodel");
const OTPModel = require("../model/OTPModel");
const SendEmailUtility = require("../utility/SendEmailUtility");


const jwt = require('jsonwebtoken');


exports.registration = async (req,res)=>{
    
    try{
        let reqBody = req.body;
        await UsersModel.create(reqBody);
        res.json({status:"Success",message:"Registration Completed"});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};



exports.login = async(req,res)=>{

    try{
        let reqBody = req.body;
        
        let user = await UsersModel.find(reqBody);

        if(user.length>0){

            let payload = {exp:Math.floor(Date.now()/1000)+(7*24*60*60),data:reqBody['email']};
            let token = jwt.sign(payload,'123-xyz-abc');
            res.json({status:"success",message:"user found",token:token});

        }
        else{
            res.json({status:"fail",message:"No user found"});
        }

    }catch(err){
        res.json({status:"Fail",message:err});
    }

}


exports.profileUpdate =async (req,res)=>{


    try{
        // const {id} = req.params;
        let email = req.headers['email'];
        let reqBody = req.body;
        await UsersModel.updateOne({email:email},reqBody);
        res.json({status:"Success",message:"Update successfully"});
    }catch(err){
        res.json({status:"Fail",message:err});
    }

}


exports.profileDetails =async (req,res)=>{

    try{
        let email = req.headers['email'];


        let result = await UsersModel.find({email:email});
        console.log(result);

        res.json({status:"Success",data:result});
    }catch(err){
        res.json({status:"Fail",message:err});
    }

    
}


exports.verifyEmail =async (req,res)=>{

    try{
        const {email}=req.params;
        
        let user = await UsersModel.find({email:email});

        if(user.length>0){

            let otp=Math.floor(100000*Math.random()*900000);

            await SendEmailUtility(email,`Your OTP code=${otp}`,"email verification");

            await OTPModel.create({email:email,otp:otp,status:'active'});

            res.json({status:"success",message:"Verification code has been sent to your email"});

        }
        else{
            res.json({status:"fail",message:"No user found"});
        }

    }catch(err){
        res.json({status:"Fail",message:err});
    }

}


exports.verifyOTP =async (req,res)=>{

    try{
        const {email,otp} = req.params;
        user = await OTPModel.find({email:email,otp:otp,status:'active'});
        
        if(user.length>0){
            await OTPModel.updateOne({email:email,otp:otp},{status:'verified'});

            res.json({status:"Success",message:"Verification code success"});
        }
        else{
            res.json({status:"fail",message:"Invalid"});
        }

        

    }
    catch(err){
        res.json({status:"Fail",message:err});
    }



}


exports.passwordReset =async (req,res)=>{

    try{
        const {email,otp,password} = req.params;
        user = await OTPModel.find({email:email,otp:otp,status:'verified'});

    
        if(user.length>0){
            await OTPModel.deleteOne({email:email,otp:otp});

            await UsersModel.updateOne({email:email},{password:password});

            res.json({status:"Success",message:"password updated successfully"});
        }
        else{
            res.json({status:"fail",message:"Invalid request"});
        }

        

    }
    catch(err){
        res.json({status:"Fail",message:err});
    }


}










