

const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{
    let token = req.headers['token'];

    jwt.verify(token,'1234',(error,success)=>{
        if(error){
            res.status(401).json({status:"unauthorized"});
        }
        else{
            let email = success['data'];
            req.headers.email = email;
            next();
        }
    });
}