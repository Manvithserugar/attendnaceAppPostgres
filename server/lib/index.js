const passportHandler = require("./passportHandler");
const redisHandler = require("./redisHandler");

module.exports = { ...passportHandler, redisHandler };
