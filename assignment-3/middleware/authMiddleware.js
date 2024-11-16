// authMiddleware.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/11/24'


const jwt = require('jsonwebtoken');
const JWT_SECRET = 'nazeefkey';

//this code for getting the token after successfull login not implemented for the front end only working in the postman for now
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token is required' });

    //error code that comes up if the token return request is invalid
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;