// userController.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/11/24


const express = require('express');
const User = require('../models/user');


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

    const { email, password } = req.body
    User.findOne({ email, password }).then(records => {
        if (records) {
            res.status(200).json({ message: 'Login successfull', user: records })

        } else {
            res.status(401).json({ message: 'user not found' })

        }
    }).catch(error => {
        console.log(error);
        res.json({
            error
        })

    })

   
}

//logi for logout
const logout = (req, res) => {

    res.json({message: 'logout successfull'})

    }


module.exports = {
    register,
    login,
    logout
}