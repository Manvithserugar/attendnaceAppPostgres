const { createStudent } = require("../../model");
const { validator } = require("../../utilities");
const { studentDetailsSchema } = require("../../model/Schemas");

module.exports = async (req, res, next) => {
  console.log("Endpoint: POST /");

  const { name, email, phone, selectedClass: classId } = req.body;
  console.log(req.body);

  const studentValidator = validator(studentDetailsSchema);
  const { error, value } = studentValidator({ name, email, phone, classId });

  if (error) {
    console.log("error while validating the student schema", error.details);
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).json(errorMessages);
  }

  try {
    await createStudent(name, email, phone, classId);

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
