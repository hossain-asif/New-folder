

const jwt = require('jsonwebtoken');


const jwtAuthMiddleware = (req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).json({error:'Unauthorized'});
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decoded;
        next();

    }
    catch(err){
        console.log(err);
        return res.status(401).json({error:'Invalid token'});
    }

}



const generateToken = (userData) => {
   
    const token = jwt.sign({userData}, process.env.JWT_SECRET,{expiresIn:30});
    console.log(token);
    return token;
}





module.exports = {jwtAuthMiddleware, generateToken} ;