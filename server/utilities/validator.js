const Joi = require("joi");

module.exports = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });
