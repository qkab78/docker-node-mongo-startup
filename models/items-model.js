const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{type:String, require:true},
    date:{type:Date, default:Date.now}
});

schema.methods.itemValidator = (obj, schemaType) => {
    const Joi = require('@hapi/joi');
    return Joi.validate(obj, schemaType);
}
module.exports = mongoose.model('Item', schema, "items");