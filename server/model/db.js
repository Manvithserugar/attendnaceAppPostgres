const { Pool } = require("pg");
const { PD_DB, PG_USER, PG_PASS, PG_HOST, PG_PORT } = require("../consts");

const pool = new Pool({
  user: PG_USER,
  password: PG_PASS,
  database: PD_DB,
  host: PG_HOST,
  port: PG_PORT,
});

module.exports = pool;
