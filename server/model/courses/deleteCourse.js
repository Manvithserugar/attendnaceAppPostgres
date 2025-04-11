const pool = require("../db");
const { DELETE_FROM_CLASSES } = require("../queries");

module.exports = async (classId) => {
  const rows = await pool.query(DELETE_FROM_CLASSES, [classId]);
  return rows.rowCount;
};
