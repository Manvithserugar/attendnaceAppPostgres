const pool = require("../db");
const { SELECT_ACCESS_FROM_ROLE_ACCESS } = require("../queries");

module.exports = async (id) => {
  const result = await pool.query(SELECT_ACCESS_FROM_ROLE_ACCESS, [id]);
  console.log(result.rows);
  return result.rows;
};
