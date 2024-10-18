const User = require('../models/User');
const fs = require('fs')

exports.importUsers = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./users.json', 'utf-8')); // Read data from movies.json
        const count = await User.countDocuments();
        if (count === 0) {
            await User.create(data); // Create User in the database
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully added');
        } else {
            res.status(200).send('Data already available');
        }
    } catch (e) {
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};