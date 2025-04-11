const pool = require("../db");
const { GET_ALL_DATES_BY_ID, GET_ATTENDANCE } = require("../queries");

module.exports = async (date) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const getIds = (attendanceArray) => {
      return attendanceArray.map((data) => data.id);
    };

    const getAllDates = async (ids) => {
      return await client.query(GET_ALL_DATES_BY_ID, [ids]);
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
    const result = await client.query(GET_ATTENDANCE);
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
