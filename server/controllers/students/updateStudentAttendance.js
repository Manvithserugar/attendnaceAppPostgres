const { updateStudentAttendance } = require("../../model");
const {
  notifications: { broadcastNotification },
} = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: POST /attendance");
  try {
    const attendance = req.body;
    const { date, Ids } = attendance;
    console.log("Date:", date);
    console.log("IDs:", Ids);

    const attendanceArray = Ids.map((id) => [id, date]);
    console.log(attendanceArray);

    const result = await updateStudentAttendance(attendanceArray, Ids);

    if (result.updatedRows === 0) {
      console.log("Student not found");
      return res.status(404).json({ error: "Student ids not found" });
    }

    console.log("Attendance updated successfully.");
    res.status(201).json({ message: "Attendance updated successfully" });

    const studentsWithStreak = result.studentsWithStreak;
    if (studentsWithStreak.length > 0) {
      console.log("Students with streak:", studentsWithStreak);
      const notification = {
        message: "Students with streak",
        data: studentsWithStreak,
      };
      broadcastNotification(notification);
      console.log("Notification sent:", notification);
    }
  } catch (error) {
    console.error("Error updating attendance:");
    next(error);
  }
};
