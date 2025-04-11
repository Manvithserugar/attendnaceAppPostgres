const { SELECT_FROM_ROLES } = require("../queries");
const pool = require("../db");

module.exports = async (role_id) => {
  try {
    const role = await pool.query(SELECT_FROM_ROLES, [role_id]);
    return role.rows[0].role;
  } catch (err) {
    console.log("error while fetching user roles", err);
    throw err;
  }
};
