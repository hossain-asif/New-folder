const passport = require('passport');
const localStrategy = require('passport-local').Strategy

const Person = require("./models/Person");


//passport implementation:localStrategy-->passport
passport.use(new localStrategy(async (USERNAME,PASSWORD,done)=>{
    try{
        // console.log('Received credentials:',USERNAME,PASSWORD);
        const user = await Person.findOne({username: USERNAME});
        if(!user){
            return done(null,false,{message:"incorrect username"});
        }

        let isMatched = await user.comparePassword(PASSWORD);
        if(isMatched){
            return done(null,user);
        }
        else{
            return done(null,false,{message:"incorrect password"});
        }


    }
    catch(err){
        return done(err);
    }
}));


module.exports = passport;