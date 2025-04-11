const { deleteStudent } = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: DELETE /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const deletedStudent = await deleteStudent(studentId);
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
