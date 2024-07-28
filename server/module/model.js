const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('Userdb', userSchema);
module.exports  = Userdb;