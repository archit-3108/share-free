const mongoose = require('mongoose');

//create schema 
const FileSchema = new mongoose.Schema({
    url:{
        type: String,
    },
    passcode:{
        type: String
    }
    
});

const File = mongoose.model('user',FileSchema);
module.exports = File;