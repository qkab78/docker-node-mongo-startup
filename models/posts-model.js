const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Post', new Schema({
    title: { type: String, require: true },
    text: { type: String, require: true },
    image: { type: String, require: true },
    tags: { type: [String], require: true },
    date: { type: Date, default: Date.now }
}))