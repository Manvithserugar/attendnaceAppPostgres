const pool = require("../db");
const { INSERT_INTO_CLASSES } = require("../queries");

module.exports = async (option) => {
  try {
    await pool.query(INSERT_INTO_CLASSES, [option]);
  } catch (error) {
    console.log("Error during course insertion");
    throw new Error(error.message);
  }
};
