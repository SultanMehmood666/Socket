const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    is_online: {
        type: String,
        required: true
    }
},
{timestamps: true},
)

module.exports = mongoose.model('user', newUser);