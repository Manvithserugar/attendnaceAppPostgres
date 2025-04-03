const studentRepo = require("../Repository/StudentRepo");
const { broadcastNotification } = require("../Repository/sseRepo");

const createStudent = async (req, res, next) => {
  console.log("Endpoint: POST /");
  let { name, email, phone, selectedClass } = req.body;
  try {
    await studentRepo.insertStudent(name, email, phone, selectedClass);

    console.log("New student added successfully.");
    res.status(201).json({
      message: "Student added successfully",
    });
  } catch (error) {
    console.error("Error creating student:", error);
    error.message = "student with same phone or email exists";
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  console.log("Endpoint: GET /");
  try {
    const students = await studentRepo.selectAllStudents();
    if (students.length === 0) {
      console.log("Students data not found");
      return res.status(404).json({ message: "Students not found" });
    }
    console.log("Students data:", students);
    res.status(200).json(students);
  } catch (error) {
    console.error("Error getting student by ID:", error);
    next(error);
  }
};

const getStudentById = async (req, res, next) => {
  console.log("Endpoint: GET /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const student = await studentRepo.selectStudentById(studentId);
    console.log("Student data:", student);
    if (!student) {
      console.log("Student not found");
      return res.status(404).json({ error: "Student not found" });
    }
    console.log("Student data:", student);
    res.status(200).json(student);
  } catch (error) {
    console.error("Error getting student by ID:", error);
    next(error);
  }
};

const getAttendanceByDate = async (req, res, next) => {
  console.log("Endpoint: POST /attendance/date");
  console.log("Request body:", req.body);
  try {
    console.log("Date provided in request body:", req.body.date);
    const dateToSearch = req.body.date;
    console.log("Date to search:", dateToSearch);
    const attendance = await studentRepo.getAttendanceByDate(dateToSearch);
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

const updateAttendance = async (req, res, next) => {
  console.log("Endpoint: POST /attendance");
  try {
    const attendance = req.body;
    const { date, Ids } = attendance;
    console.log("Date:", date);
    console.log("IDs:", Ids);

    const attendanceArray = Ids.map((id) => [id, date]);
    console.log(attendanceArray);

    const result = await studentRepo.updateAttendance(attendanceArray, Ids);

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

const updateStudent = async (req, res, next) => {
  console.log("Endpoint: PUT /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const updateBody = req.body;
    const { name, email, phone, classId } = updateBody;
    console.log("Update body:", updateBody);
    const rowsAffected = await studentRepo.updateStudent(
      studentId,
      name,
      email,
      phone,
      classId
    );
    if (!rowsAffected) {
      console.log("Student not found");
      return res.status(404).json({ error: "Student not found" });
    }
    console.log("Student updated successfully");
    res.status(200).json({
      message: "Student updated successfully",
      affectedRows: rowsAffected,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  console.log("Endpoint: DELETE /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const deletedStudent = await studentRepo.deleteStudent(studentId);
    if (!deletedStudent) {
      console.log("Student not found");
      return res.status(404).json({ error: "Student not found" });
    }
    console.log("Student deleted successfully");
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    next(error);
  }
};

module.exports = {
  //   sendTelegramNotification,
  //   checkAccessToken,
  getAttendanceByDate,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  updateAttendance,
  getAllStudents,
  //   resetAttendance,
  //   deleteAllStudents,
  //   getBackupData,
  //   removeAttendanceByDate,
};
