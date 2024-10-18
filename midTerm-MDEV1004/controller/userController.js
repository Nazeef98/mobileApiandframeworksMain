const User = require('../models/User');
const fs = require('fs')


//importing the users method 
exports.importUsers = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./users.json', 'utf-8')); // Reading the data from the user.JSON
        const count = await User.countDocuments();
        if (count === 0) {
            await User.create(data); // Creating the user in the DB 
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully added');
        } else {
            res.status(200).send('Data already available');
        }
    } catch (e) {
        //to highlight error if error in importing th data throught this method 
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};

//get the users from the list 
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error retrieving users');
    }
};


//the method is used to get the list of the userBy ID 
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ userId: req.params.id });
        if (!user) {
            return res.status(404).send('user is not available');
        }
        res.status(201).json(user);

    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error getting the user');
    }
};