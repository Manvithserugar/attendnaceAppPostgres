const pool = require("../db");
const { SELECT_FROM_USERS_BY_ID } = require("../queries");

module.exports = async (id, email) => {
  const result = await pool.query(SELECT_FROM_USERS_BY_ID, [id, email]);
  console.log(result.rows[0]);
  return result.rows[0];
};
