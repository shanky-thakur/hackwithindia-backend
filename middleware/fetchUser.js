const jwt = require('jsonwebtoken');
const jwtcode = "niranjanalibraries";

const fetchUser = (req,res,next) =>{
    const token = req.header('user-token');
    if(!token){
        return res.status(401).send({error:'please type correct details'});
    }
    try{
        const data = jwt.verify(token,jwtcode);
        req.user = data.user;
        next();
    }
    catch(error){
        return res.status(401).send({error:'please type correct details'});
    }
}

module.exports = fetchUser;