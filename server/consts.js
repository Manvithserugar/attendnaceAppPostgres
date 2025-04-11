const dotenv = require("dotenv");
dotenv.config();

const { PD_DB, PG_USER, PG_PASS, PG_HOST, PG_PORT, HTTP_PORT, SECRET_KEY } =
  process.env;

//   ENABLE_DEBUG_LOG = "false",

module.exports = {
  PD_DB,
  PG_USER,
  PG_PASS,
  PG_HOST,
  PG_PORT,
  HTTP_PORT,
  SECRET_KEY,
};

//   ENABLE_DEBUG_LOG: ENABLE_DEBUG_LOG === "true",
