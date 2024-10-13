// mongodb.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24

const mongoose = require('mongoose');

//mongo DB connection method
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://test:1hNSrF2z1ahFMy7v@cluster0.re95rja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;