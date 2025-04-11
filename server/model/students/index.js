const createStudent = require("./createStudent");
const updateStudentDetails = require("./updateStudentDetails");
const deleteStudent = require("./deleteStudent");
const updateStudentAttendance = require("./updateStudentAttendance");
const getAllStudentAttendanceByDate = require("./getAllStudentAttendanceByDate");
const getStudentDetailsById = require("./getStudentDetailsById");
const getAllStudentsDetails = require("./getAllStudentsDetails");

module.exports = {
  createStudent,
  updateStudentDetails,
  deleteStudent,
  updateStudentAttendance,
  getAllStudentAttendanceByDate,
  getStudentDetailsById,
  getAllStudentsDetails,
};
