const express = require("express");
const router = express.Router();

const {
  getAllStudentsDetails,
  createStudent,
  getStudentDetailsById,
  updateStudentAttendance,
  getAllStudentAttendanceByDate,
  updateStudentDetails,
  deleteStudent,
} = require("../controllers");

const { verifyRBAC } = require("../middlewares");

// API base path
const apiBasePath = "/api/v1/student";

router.get(`${apiBasePath}`, getAllStudentsDetails);

router.post(`${apiBasePath}`, verifyRBAC(["admin"]), createStudent);

router.get(`${apiBasePath}/:id`, getStudentDetailsById);

router.post(
  `${apiBasePath}/attendance`,
  verifyRBAC(["admin"]),
  updateStudentAttendance
);

router.post(`${apiBasePath}/attendance/date`, getAllStudentAttendanceByDate);

router.put(`${apiBasePath}/:id`, verifyRBAC(["admin"]), updateStudentDetails);

router.delete(`${apiBasePath}/:id`, verifyRBAC(["admin"]), deleteStudent);

module.exports = router;
