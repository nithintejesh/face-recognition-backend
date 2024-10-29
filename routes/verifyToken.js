const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    const token=req.body.token;
    console.log(token);
    try{
        const verified=jwt.verify(token,process.env.TOKEN_SECRET);
        req.user=verified;
        next();
    }catch(err){
        res.send({success:false,msg:'Invalid Token'});
    }
}

// const jwt = require('jsonwebtoken');

// module.exports = function(req, res, next) {
//     // Extract the token from the Authorization header
//     const token = req.header('Authorization')?.split(' ')[1];
    
//     if (!token) {
//         return res.send({ success: false, msg: 'No token provided' });
//     }

//     try {
//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         req.user = verified;
//         next();
//     } catch (err) {
//         res.send({ success: false, msg: 'Invalid Token' });
//     }
// };
