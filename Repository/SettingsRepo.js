const pool = require("../db");
const settingsQueries = require("../Queries/SettingQueries");

const createOption = async (option) => {
  await pool.query(settingsQueries.INSERT_INTO_CLASSES, [option]);
};

const getOptions = async () => {
  const result = await pool.query(settingsQueries.SELECT_FROM_CLASSES);
  return result.rows;
};

const deleteOption = async (classId) => {
  const rows = await pool.query(settingsQueries.DELETE_FROM_CLASSES, [classId]);
  return rows.rowCount;
};

module.exports = {
  createOption,
  getOptions,
  deleteOption,
};
