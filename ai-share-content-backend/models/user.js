const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phoneNumber: { type: String, required: true, unique: true },
    accessCode: { type: String, default: '' },
    generatedContents: { type: Object }
});

module.exports = mongoose.model('User', userSchema);