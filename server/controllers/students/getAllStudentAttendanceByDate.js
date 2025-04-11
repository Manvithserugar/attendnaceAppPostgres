const { getAllStudentAttendanceByDate } = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: POST /attendance/date");
  console.log("Request body:", req.body);
  try {
    console.log("Date provided in request body:", req.body.date);
    const dateToSearch = req.body.date;
    console.log("Date to search:", dateToSearch);
    const attendance = await getAllStudentAttendanceByDate(dateToSearch);
    if (attendance.length === 0) {
      console.log("attendance data not found");
      return res.status(404).json({ message: "attendance data not found" });
    }
    console.log("student data retrieved successfully");
    res.status(200).json(attendance);
  } catch (error) {
    console.error("Error getting attendance by date:");
    next(error);
  }
};
