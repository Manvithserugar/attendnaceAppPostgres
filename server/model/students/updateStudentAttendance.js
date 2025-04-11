const pgFormat = require("pg-format");

const pool = require("../db");
const {
  INSERT_INTO_ATTENDANCE,
  UPDATE_STUDENT_STATS,
  SELECT_STUDENTS_WITH_STREAK,
} = require("../queries");

module.exports = async (attendanceArray, ids) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    await client.query(pgFormat(INSERT_INTO_ATTENDANCE, attendanceArray));

    const updatedRows = await client.query(UPDATE_STUDENT_STATS, [ids]);

    const studentsWithStreak = await client.query(SELECT_STUDENTS_WITH_STREAK, [
      ids,
    ]);

    await client.query("COMMIT");

    return {
      updatedRows: updatedRows.rowCount,
      studentsWithStreak: studentsWithStreak.rows,
    };
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};
