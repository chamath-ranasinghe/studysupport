const jwt = require("jsonwebtoken");

exports.getToken = (username) =>{
    const token = jwt.sign({username: username},process.env.ACCESS_TOKEN_SECRET, {expiresIn: "2h"});
    return token;
}