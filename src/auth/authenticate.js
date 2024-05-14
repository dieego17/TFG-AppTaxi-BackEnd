const { getToken } = require("./getToken");
const { verifyAccessToken } = require("./verifyToke");


function authenticate(req, res, next) {
    const token = getToken(req.headers);
    if(token){
        const decoded = verifyAccessToken(token);
        if(decoded){
            req.usuario = decoded;
            next();
        }else{
            res.status(401).json({error: "Unauthorized"});
        }
    }else{
        res.status(401).json(401, {error: "Unauthorized"});
    }
}

module.exports = authenticate;