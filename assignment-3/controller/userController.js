// userController.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/11/24


const express = require('express');
const jwt = require('jsonwebtoken'); 
const User = require('../models/user');

const JWT_SECRET = 'nazeefkey';


//logic for register
const register = (req, res) => {
    console.log(req.body)
    User.create(req.body).then(records => {
        res.json(records)
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })
}
//logic for login
const login = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password }).then(user => {
        if (user) {
             //logic to get token and with the logic that expires in  1 hour
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token }); // Respond with token
        } else {
            res.status(401).json({ message: 'User not found' });
        }
    }).catch(error => {
        console.log(error);
        res.json({ error });
    });
};

//logi for logout
const logout = (req, res) => {

    res.json({message: 'logout successfull'})

    }


module.exports = {
    register,
    login,
    logout
}