const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    comment : {
        type : String
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    created_at : {
        type : mongoose.Schema.Types.Date,
        default: Date.now
    }
})

module.exports = mongoose.model('comments', CommentSchema)