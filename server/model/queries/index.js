const courses = require("./courses");
const students = require("./students");
const auth = require("./auth");

module.exports = { ...courses, ...students, ...auth };
