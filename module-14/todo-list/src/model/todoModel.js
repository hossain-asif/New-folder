

const mongoose = require('mongoose');

const dataSchema = mongoose.Schema(
    {

        email:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        status:{
            type:String,
            require:true 
        }

    },
    {
        timestamps:true,
        versionKey:false
    }
);

const todoModel = mongoose.model('todolists',dataSchema);

module.exports = todoModel;