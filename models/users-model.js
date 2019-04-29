const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true },
    password: { type: String, require: true, select: false },
    avatar: { type: [String], require: true },
    access: { type: String, required: true, enum: ['user', 'admin'], default: "user" },
    createdOn: { type: Date, default: Date.now }
}))