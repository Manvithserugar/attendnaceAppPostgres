const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});
