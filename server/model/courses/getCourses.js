const pool = require("../db");
const { SELECT_FROM_CLASSES } = require("../queries");

module.exports = async () => {
  const result = await pool.query(SELECT_FROM_CLASSES);
  return result.rows;
};
