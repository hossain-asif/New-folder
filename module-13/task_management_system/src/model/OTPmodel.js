
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
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
});


const OTPModel = mongoose.model('otps',dataSchema);

module.exports = OTPModel;