const {Schema} = require ('mongoose');
const {mongoose} = require('mongoose');

const userschema = new Schema({
    email:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    username : {
        type : String,
        require : true
    }
});

const USER = mongoose.model('users',userschema);

module.exports = USER;