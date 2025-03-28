const pool = require("../db");
const settingsQueries = require("../Queries/SettingQueries");
const studentQueries = require("../Queries/StudentQueries");

const createOption = async (option) => {
  await pool.query(settingsQueries.INSERT_INTO_CLASSES, [option]);
};

const getOptions = async () => {
  const result = await pool.query(settingsQueries.SELECT_FROM_CLASSES);
  return result.rows;
};

const deleteOption = async (classId) => {
  const rows = await pool.query(settingsQueries.DELETE_FROM_CLASSES, [classId]);
  return rows.rowCount;
};

const getBackUpData = async (date) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const getIds = (attendanceArray) => {
      return attendanceArray.map((data) => data.id);
    };

    const getAllDates = async (ids) => {
      return await client.query(studentQueries.GET_ALL_DATES_BY_ID, [ids]);
    };

    const getFinalArray = async (attendance) => {
      const allDates = await getAllDates(getIds(attendance));
      const allDatesArray = allDates.rows;
      return attendance.map((data) => {
        data.attendedDates = allDatesArray
          .filter((element) => element.student_id === data.id)
          .map((element) => element.attendance_date);
        return data;
      });
    };
    const result = await client.query(studentQueries.GET_ATTENDANCE);
    const attendance = result.rows;
    const finalAttendanceArray = await getFinalArray(attendance);
    await client.query("COMMIT");
    return finalAttendanceArray;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  createOption,
  getOptions,
  deleteOption,
  getBackUpData,
};
