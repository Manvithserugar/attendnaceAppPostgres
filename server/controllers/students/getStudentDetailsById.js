const { getStudentDetailsById } = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: GET /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const student = await getStudentDetailsById(studentId);
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
