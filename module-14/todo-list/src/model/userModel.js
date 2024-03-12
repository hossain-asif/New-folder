

const mongoose = require("mongoose");


const dataSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},
{
    timestamps:true,
    versionKey:false
});


const userModel = mongoose.model('users',dataSchema);

module.exports=userModel;