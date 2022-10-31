const mongoose = require('mongoose');

const connectDB = handler => async (req, res) => {
    if(mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    mongoose.connect(process.env.MONGODB_DEV_URL, ()=> {
        console.log("connected to MongoDB successfully");
    })
};

module.exports = connectDB;