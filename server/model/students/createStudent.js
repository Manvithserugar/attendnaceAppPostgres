const pool = require("../db");
const {
  INSERT_INTO_STUDENT,
  INSERT_INTO_STUDENT_CLASS,
  INSERT_INTO_STUDENT_STATS,
} = require("../queries");

module.exports = async (name, email, phone, classId) => {
  const client = await pool.connect();
  try {
    client.query("BEGIN");
    const student = await client.query(INSERT_INTO_STUDENT, [
      name,
      email,
      phone,
    ]);
    const studentId = student.rows[0].id;
    console.log(studentId);

    await client.query(INSERT_INTO_STUDENT_CLASS, [studentId, classId]);
    await client.query(INSERT_INTO_STUDENT_STATS, [studentId]);
    client.query("COMMIT");
  } catch (error) {
    client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
