const { getCourses } = require("../../model");

module.exports = async (req, res, next) => {
  try {
    const options = await getCourses();
    if (options.length === 0)
      return res.status(404).json({ message: "No Classes Added" });
    res.status(200).json(options);
  } catch (err) {
    console.log("error retrieving options:");
    next(err);
  }
};
