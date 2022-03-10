require("dotenv").config();
const jwt = require('jsonwebtoken');

function midAuthToken(req, res, next) {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.sendStatus(400);
    }
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(401);
        }

        req.user = user;

        next();
    })

}

module.exports = midAuthToken;