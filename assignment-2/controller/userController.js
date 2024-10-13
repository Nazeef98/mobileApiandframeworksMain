// userController.js
// Nazeef Ahmad Farooqui
// 200590966
// 13/10/24
const express = require('express');
const User = require('../models/user');

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
const logout = (req, res) => {

    res.json({message: 'logout successfull'})

    }


module.exports = {
    register,
    login,
    logout
}