const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, index: { unique: true }}, 
    password: {type:String, required: true},
   
    
});

module.exports = mongoose.model('Quizeuser', userSchema);    