const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.PD_DB;
const user = process.env.PG_USER;
const pass = process.env.PG_PASS;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;

const pool = new Pool({
  user: user,
  password: pass,
  database: db,
  host: host,
  port: port,
});

module.exports = pool;
