const Joi = require('joi');
const joi_objectID = require('joi-objectid')(Joi);
module.exports = {
    create: {
        email: Joi.string().email().required(),
        username: Joi.string().regex(/^[a-z]{4,10}/).required(),
        access: Joi.string().regex(/^[a-z]{4,6}/).required(),
        avatar: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}/).required(),
        confirmPassword: Joi.string().regex(/^[a-zA-Z0-9]{8,30}/).required()
    },
    update: {
        email: Joi.string().email(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}/)
    },
    delete: {
        id: joi_objectID()
    }
}
