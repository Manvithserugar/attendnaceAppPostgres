const { deleteCourse } = require("../../model");

module.exports = async (req, res, next) => {
  try {
    const classId = req.params.id;
    const rowsAffected = await deleteCourse(classId);
    if (rowsAffected === 0)
      return res.status(404).json({ message: "Class not found" });
    res.status(200).json({ message: "class successfully deleted" });
  } catch (err) {
    console.log("error deleteing the option:");
    next(err);
  }
};
