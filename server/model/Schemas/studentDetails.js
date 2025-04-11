const Joi = require("joi");

const studentDetailsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required(),
  classId: Joi.string()
    .guid({ version: ["uuidv4"] })
    .required(),
});

module.exports = studentDetailsSchema;
