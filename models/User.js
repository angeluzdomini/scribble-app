const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    created_at : {
        type : mongoose.Schema.Types.Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema)