const { addCourse } = require("../../model");

module.exports = async (req, res, next) => {
  try {
    const { option } = req.body;
    await addCourse(option);
    res.status(201).json({ message: "class added successfully" });
  } catch (err) {
    console.log("error adding the option:");
    err.message = "the class already exists";
    next(err);
  }
};
