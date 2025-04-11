const express = require("express");
const router = express.Router();

const {
  authenticateUser,
  registerUser,
  getUserRoleAccess,
} = require("../controllers");
const { authenticateJWT } = require("../lib/passportHandler");

const apiBasePath = "/api/v1/oauth";

router.post(`${apiBasePath}/login`, authenticateUser);
router.post(`${apiBasePath}/signup`, registerUser);
router.get(`${apiBasePath}/role/access`, [authenticateJWT], getUserRoleAccess);

module.exports = router;
