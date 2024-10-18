const mongoose = require("mongoose");
const MONGOURI = "mongodb+srv://test:1hNSrF2z1ahFMy7v@cluster0.re95rja.mongodb.net/test";

const InitiateMongoServer = async()=>{
    try{
        await mongoose.connect(MONGOURI);
    
    console.log("connected to database");
    
    }catch(e){
        console.log(e);
        throw(e);
        }
    };

    module.exports= InitiateMongoServer;