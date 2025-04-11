const pool = require("../db");
const { SELECT_STUDENT_FROM_ID } = require("../queries");

module.exports = async (id) => {
  const selectedStudent = await pool.query(SELECT_STUDENT_FROM_ID, [id]);
  return selectedStudent.rows[0];
};
