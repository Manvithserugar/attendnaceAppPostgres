const students = require("./students");
const courses = require("./courses");
const auth = require("./auth");
const notifications = require("./notifications");

module.exports = { ...students, ...courses, ...auth, notifications };
