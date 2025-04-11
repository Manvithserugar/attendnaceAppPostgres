const pool = require("../db");
const { SELECT_ALL_STUDENTS } = require("../queries");

module.exports = async () => {
  const students = await pool.query(SELECT_ALL_STUDENTS);
  return students.rows;
};
