const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model according to the json 
const UserSchema = new Schema({
    userId: { type: Number },  
    userData: { 
      name: { type: String },
      age: { type: Number },
      location: { type: String },
      email: { type: String },
    }
  });

const User = mongoose.model('User',MoviesSchema);
module.exports = User;
