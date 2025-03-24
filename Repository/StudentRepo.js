const pool = require("../db");
const studentQueries = require("../Queries/StudentQueries");
const pgFormat = require("pg-format");

const insertStudent = async (name, email, phone, classId) => {
  const client = await pool.connect();
  try {
    client.query("BEGIN");
    const student = await client.query(studentQueries.INSERT_INTO_STUDENT, [
      name,
      email,
      phone,
    ]);
    const studentId = student.rows[0].id;
    console.log(studentId);

    await client.query(studentQueries.INSERT_INTO_STUDENT_CLASS, [
      studentId,
      classId,
    ]);
    await client.query(studentQueries.INSERT_INTO_STUDENT_STATS, [studentId]);
    client.query("COMMIT");
  } catch (error) {
    client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

const selectAllStudents = async () => {
  const students = await pool.query(studentQueries.SELECT_ALL_STUDENTS);
  return students.rows;
};

const selectStudentById = async (id) => {
  const selectedStudent = await pool.query(
    studentQueries.SELECT_STUDENT_FROM_ID,
    [id]
  );
  return selectedStudent.rows;
};

const updateStudent = async (studentId, name, email, phone, classId) => {
  const updatedStudent = await pool.query(
    studentQueries.UPDATE_STUDENT_AND_STUDENT_CLASS,
    [studentId, name, email, phone, classId]
  );

  if (updatedStudent.rowCount === 0) return undefined;
  return updatedStudent.rowCount;
};

const deleteStudent = async (studentId) => {
  const deletedStudent = await pool.query(studentQueries.DELETE_STUDENT, [
    studentId,
  ]);
  if (deletedStudent.rowCount === 0) return undefined;
  return deletedStudent.rowCount;
};

const updateAttendance = async (attendanceArray, ids) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    await client.query(
      pgFormat(studentQueries.INSERT_INTO_ATTENDANCE, attendanceArray)
    );

    const rows = await client.query(studentQueries.UPDATE_STUDENT_STATS, [ids]);
    await client.query("COMMIT");

    return rows.rowCount;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

const getAttendanceByDate = async (date) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const getIds = (attendanceArray) => {
      return attendanceArray.map((data) => data.id);
    };

    const getLastFourDates = async (ids) => {
      return await client.query(studentQueries.GET_LAST_FOUR_DATES, [ids]);
    };

    const getFinalArray = async (attendance) => {
      const last4Dates = await getLastFourDates(getIds(attendance));
      const last4DatesArray = last4Dates.rows;
      return attendance.map((data) => {
        data.last4Dates = last4DatesArray
          .filter((element) => element.student_id === data.id)
          .map((element) => element.attendance_date);
        return data;
      });
    };

    if (date) {
      const result = await client.query(studentQueries.GET_ATTENDANCE_BY_DATE, [
        date,
      ]);
      const attendance = result.rows;
      console.log(attendance);
      const finalAttendanceArray = await getFinalArray(attendance);
      await client.query("COMMIT");
      return finalAttendanceArray;
    } else {
      const result = await client.query(studentQueries.GET_ATTENDANCE);
      const attendance = result.rows;
      console.log(attendance);
      const finalAttendanceArray = await getFinalArray(attendance);
      await client.query("COMMIT");
      return finalAttendanceArray;
    }
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  insertStudent,
  selectStudentById,
  updateStudent,
  deleteStudent,
  updateAttendance,
  getAttendanceByDate,
  selectAllStudents,
};
