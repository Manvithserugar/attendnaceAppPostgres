const pool = require("../db");
const { INSERT_INTO_USERS } = require("../queries");

module.exports = async (name, email, password) => {
  const user = await pool.query(INSERT_INTO_USERS, [name, email, password]);
  return user.rows[0];
};
