const express = require("express");
const router = express.Router();

const studentService = require("../services/StudentService");
const authorizeRoute = require("../utilities/authorizeRouteService");

// API base path
const apiBasePath = "/api/v1/student";

router.get(`${apiBasePath}`, studentService.getAllStudents);

router.post(
  `${apiBasePath}`,
  authorizeRoute(["admin"]),
  studentService.createStudent
);

router.get(`${apiBasePath}/:id`, studentService.getStudentById);

router.post(
  `${apiBasePath}/attendance`,
  authorizeRoute(["admin"]),
  studentService.updateAttendance
);

router.post(
  `${apiBasePath}/attendance/date`,
  studentService.getAttendanceByDate
);

router.put(
  `${apiBasePath}/:id`,
  authorizeRoute(["admin"]),
  studentService.updateStudent
);

router.delete(
  `${apiBasePath}/:id`,
  authorizeRoute(["admin"]),
  studentService.deleteStudent
);

module.exports = router;
