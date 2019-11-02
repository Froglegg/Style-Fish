const config = require("./default.json")
const jwt = require("jsonwebtoken");
console.log(config.jwtSecret)
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) {
        res.status(401).json({
            message: 'No token, authorization denied.'
        })
    } else {
        try {
            const decoded = jwt.verify(token, config.jwtSecret);
            req.user = decoded;
            next();

        } catch(e) {
            res.status(400).json({ message: "Token is invalid."})
        }
 
    }
}

module.exports = auth;