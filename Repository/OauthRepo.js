const pool = require("../db");
const oauthQueries = require("../Queries/OauthQueries");

const createUser = async (name, email, password) => {
  const user = await pool.query(oauthQueries.INSERT_INTO_USERS, [
    name,
    email,
    password,
  ]);
  return user.rows[0];
};

const checkUser = async (email, password) => {
  const result = await pool.query(oauthQueries.SELECT_FROM_USERS, [
    email,
    password,
  ]);
  console.log(result.rows[0]);
  return result.rows[0];
};

const checkUserForJwt = async (id, email) => {
  const result = await pool.query(oauthQueries.SELECT_FROM_USERS_BY_ID, [
    id,
    email,
  ]);
  console.log(result.rows[0]);
  return result.rows[0];
};

const fetchRole = async (id) => {
  const result = await pool.query(oauthQueries.SELECT_FROM_ROLES, [id]);
  console.log(result.rows[0]);
  return result.rows[0].role;
};

module.exports = {
  createUser,
  checkUser,
  checkUserForJwt,
  fetchRole,
};
