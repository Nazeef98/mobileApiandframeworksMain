// user.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24

// models/user.js
//schema for the API
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    
});

module.exports = mongoose.model('User', userSchema);
