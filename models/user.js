const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    user: {type: String},
    status: {type: Boolean, default: false}
})

module.exports = mongoose.model('back_user', userSchema)