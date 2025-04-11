const express = require("express");
const router = express.Router();

const {
  addCourse,
  getCourses,
  deleteCourse,
  exportStudentStatReport,
} = require("../controllers");

const { verifyRBAC } = require("../middlewares");

const apiBasePath = "/api/v1/settings";

router.post(
  `${apiBasePath}/dropdown-options`,
  verifyRBAC(["admin"]),
  addCourse
);

router.get(`${apiBasePath}/dropdown-options`, getCourses);

router.delete(
  `${apiBasePath}/dropdown-options/:id`,
  verifyRBAC(["admin"]),
  deleteCourse
);

router.get(
  `${apiBasePath}/backup`,
  verifyRBAC(["admin"]),
  exportStudentStatReport
);

module.exports = router;
