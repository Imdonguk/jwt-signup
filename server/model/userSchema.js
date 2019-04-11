const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, default: '' },
    userName: { type: String, default: '' },
    password: { type: String, default: '' }
})

module.exports = mongoose.model('user', userSchema);