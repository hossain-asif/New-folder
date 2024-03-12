
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
},
{
    timeStamps:true,
    versionKey:false
});


const tasksModel = mongoose.model('tasks',dataSchema);

module.exports = tasksModel;