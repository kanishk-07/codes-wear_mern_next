const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
})
mongoose.models = {}
const User = mongoose.models.User || mongoose.model('users', UserSchema);
module.exports = User;