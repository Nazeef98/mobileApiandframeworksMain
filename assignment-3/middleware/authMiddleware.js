// authMiddleware.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/11/24'


const jwt = require('jsonwebtoken');
const JWT_SECRET = 'yourSecretKey';


const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token is required' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;