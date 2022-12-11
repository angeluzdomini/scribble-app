const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    user_firstname : {
        type : String
    },
    user_lastname : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    created_at : {
        type : Timestamp
    }
})

module.exports = mongoose.model('users', UserSchema)