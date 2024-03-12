

// Generate the codes for how to Read the data of a single product.
// Generate codes on how to Delete a product based on a specific ID.
// Generate codes on how to Update a product based on a specific ID.






const productModel = require('../model/productModel');



exports.productCreate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
       
        let reqBody = req.body;
        reqBody.email = email;

        await productModel.create(reqBody);

        res.json({status:"Success",message:"product created."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.productUpdate = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let reqBody = req.body;

        let {id} = req.params;
        

        await productModel.updateOne({_id:id,email:email},reqBody);

   

        res.json({status:"Success",message:"Updated successfully."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.productDelete = async (req,res)=>{
    
    try{
        let email = req.headers['email'];
        let {id} = req.params;



        await productModel.deleteOne({_id:id,email:email});

        res.json({status:"Success",message:"product deleted."});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};
exports.productRead = async (req,res)=>{
    
    try{
        let email = req.headers['email'];

        let data = await productModel.find({email:email});

        res.json({status:"Success",data:data});
    }catch(err){
        res.json({status:"Fail",message:err});
    }
    
};



