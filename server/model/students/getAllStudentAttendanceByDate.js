const pool = require("../db");
const {
  GET_LAST_FOUR_DATES,
  GET_ATTENDANCE_BY_DATE,
  GET_ATTENDANCE,
} = require("../queries");

module.exports = async (date) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const getIds = (attendanceArray) => {
      return attendanceArray.map((data) => data.id);
    };

    const getLastFourDates = async (ids) => {
      return await client.query(GET_LAST_FOUR_DATES, [ids]);
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
      const result = await client.query(GET_ATTENDANCE_BY_DATE, [date]);
      const attendance = result.rows;
      console.log(attendance);
      const finalAttendanceArray = await getFinalArray(attendance);
      await client.query("COMMIT");
      return finalAttendanceArray;
    } else {
      const result = await client.query(GET_ATTENDANCE);
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
