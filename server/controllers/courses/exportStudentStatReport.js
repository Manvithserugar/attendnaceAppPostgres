const { exportStudentStatReport } = require("../../model");

module.exports = async (req, res, next) => {
  console.log("Endpoint: GET /settings/backup");

  try {
    const backup = await exportStudentStatReport();
    if (backup.length === 0) {
      console.log("backup data not found");
      return res.status(404).json({ message: "backup data not found" });
    }
    console.log("backup data retrieved successfully", backup);
    res.status(200).json(backup);
  } catch (error) {
    console.error("Error getting backup:");
    next(error);
  }
};
