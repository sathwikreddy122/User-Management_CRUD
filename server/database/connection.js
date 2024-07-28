const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`connected to database`)
        })
    }
    catch(error){
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectDB;