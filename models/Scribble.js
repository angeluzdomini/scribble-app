const mongoose = require('mongoose')

const ScribbleSchema = mongoose.Schema({
    comment : {
        type : String
    }
})

module.exports = mongoose.model('scribbles', ScribbleSchema)