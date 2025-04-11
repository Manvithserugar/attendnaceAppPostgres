const pool = require("../db");
const { UPDATE_STUDENT_AND_STUDENT_CLASS } = require("../queries");

module.exports = async (studentId, name, email, phone, classId) => {
  const updatedStudent = await pool.query(UPDATE_STUDENT_AND_STUDENT_CLASS, [
    studentId,
    name,
    email,
    phone,
    classId,
  ]);

  if (updatedStudent.rowCount === 0) return undefined;
  return updatedStudent.rowCount;
};
