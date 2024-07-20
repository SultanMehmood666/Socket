const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    message: {
        type: String,
        required: true
    }
},
{timestamps: true},
)

module.exports = mongoose.model('ChatSchema', ChatSchema);