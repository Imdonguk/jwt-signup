const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    pwd: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);