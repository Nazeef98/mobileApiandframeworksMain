const mongoose = require("mongoose");
const MONGOURI = process.env.MONGO_URI;


const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGO_URI);

        console.log('connected to DBs')
    }
    catch (e) {
        console.log(e);
        throw (e);
    }
}
module.exports= InitiateMongoServer