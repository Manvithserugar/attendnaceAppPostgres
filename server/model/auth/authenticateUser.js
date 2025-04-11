const pool = require("../db");
const { SELECT_FROM_USERS } = require("../queries");

module.exports = async (email, password) => {
  const result = await pool.query(SELECT_FROM_USERS, [email, password]);
  console.log(result.rows[0]);
  return result.rows[0];
};
