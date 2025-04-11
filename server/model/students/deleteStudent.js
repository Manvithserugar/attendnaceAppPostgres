const pool = require("../db");
const { DELETE_STUDENT } = require("../queries");

module.exports = async (studentId) => {
  const deletedStudent = await pool.query(DELETE_STUDENT, [studentId]);
  if (deletedStudent.rowCount === 0) return undefined;
  return deletedStudent.rowCount;
};
