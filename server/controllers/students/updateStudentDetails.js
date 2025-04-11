const Joi = require("joi");
const { updateStudentDetails } = require("../../model");
const { validator } = require("../../utilities");
const { studentDetailsSchema } = require("../../model/Schemas");

module.exports = async (req, res, next) => {
  console.log("Endpoint: PUT /:id");
  try {
    const studentId = req.params.id;
    console.log("Student ID:", studentId);
    const updateBody = req.body;
    const { name, email, phone, classId } = updateBody;
    console.log("Update body:", updateBody);

    const studentValidator = validator(studentDetailsSchema);
    const { error, value } = studentValidator({ name, email, phone, classId });

    if (error) {
      console.log("error while validating the student schema", error.details);
      const errorMessages = error.details.map((err) => err.message);
      return res.status(400).json(errorMessages);
    }

    const rowsAffected = await updateStudentDetails(
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
