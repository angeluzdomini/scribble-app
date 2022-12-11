const mongoose = require('mongoose')

const ScribbleSchema = mongoose.Schema({
    scribble_title : {
        type : String
    },
    scribble_description : {
        type : String
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    created_at : {
        type : mongoose.Schema.Types.Date,
        default: Date.now
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }],
    total_likes: {
        type: Number
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'comments'
    }]
})

module.exports = mongoose.model('scribbles', ScribbleSchema)