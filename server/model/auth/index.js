const authenticateUser = require("./authenticateUser");
const registerUser = require("./registerUser");
const getUserRoleAccess = require("./getUserRoleAccess");
const verifyAccessToken = require("./verifyAccessToken");
const getUserRole = require("./getUserRole");

module.exports = {
  authenticateUser,
  registerUser,
  getUserRoleAccess,
  verifyAccessToken,
  getUserRole,
};
