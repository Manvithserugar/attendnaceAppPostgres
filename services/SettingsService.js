const settingsRepo = require("../Repository/SettingsRepo");

const addDropdownOption = async (req, res, next) => {
  try {
    const { option } = req.body;
    await settingsRepo.createOption(option);
    res.status(201).json({ message: "class added successfully" });
  } catch (err) {
    console.log("error adding the option:");
    err.message = "the class already exists";
    next(err);
  }
};

const getDropdownOptions = async (req, res, next) => {
  try {
    const options = await settingsRepo.getOptions();
    if (options.length === 0)
      return res.status(404).json({ message: "No Classes Added" });
    res.status(200).json(options);
  } catch (err) {
    console.log("error retrieving options:");
    next(err);
  }
};

const deleteDropdownOption = async (req, res, next) => {
  try {
    const classId = req.params.id;
    const rowsAffected = await settingsRepo.deleteOption(classId);
    if (rowsAffected === 0)
      return res.status(404).json({ message: "Class not found" });
    res.status(200).json({ message: "class successfully deleted" });
  } catch (err) {
    console.log("error deleteing the option:");
    next(err);
  }
};

const getBackupData = async (req, res, next) => {
  console.log("Endpoint: GET /settings/backup");

  try {
    const backup = await settingsRepo.getBackUpData();
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

module.exports = {
  getDropdownOptions,
  addDropdownOption,
  deleteDropdownOption,
  getBackupData,
};
