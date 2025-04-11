const { getAllStudentsDetails } = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: GET /");
  try {
    const students = await getAllStudentsDetails();
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
