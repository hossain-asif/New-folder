const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }

});

personSchema.pre('save',async function(next){
    const person = this;
    // console.log(person)
    if(!person.isModified('password')) return next();

    try{

        //salt generation
        const salt = await bcrypt.genSalt(10);
        // hash generation
        const hashedPassword = await bcrypt.hash(person.password,salt);
      
        person.password = hashedPassword;
        next();
    }
    catch(err){
        return next(err);
    }
});

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.password);

        return isMatch;

    }
    catch(err){
        throw err;
    }
}

const Person = mongoose.model('Person',personSchema);
module.exports = Person;