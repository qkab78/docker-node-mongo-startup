const Joi = require('@hapi/joi');
const Joi_objectId = require('joi-objectid')(Joi);
module.exports = {
    create: {
        name: Joi.string().required()
    },
    update: {
        name: Joi.string().required()
    },
    delete: {
        id: Joi_objectId().required()
    },
}
