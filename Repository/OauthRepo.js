const pool = require("../db");
const oauthQueries = require("../Queries/OauthQueries");

const createUser = async (name, email, password) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const user = await client.query(oauthQueries.INSERT_INTO_USERS, [
      name,
      email,
      password,
    ]);

    const permissions = await client.query(
      oauthQueries.SELECT_ACCESS_FROM_ROLE_ACCESS,
      [result.rows[0].role_id]
    );

    await client.query("COMMIT");

    console.log(user.rows[0], permissions.rows);
    return { user: user.rows[0], permissions: permissions.rows };
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Transaction failed:", error);
    throw error;
  } finally {
    client.release();
  }
};

const checkUser = async (email, password) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const result = await client.query(oauthQueries.SELECT_FROM_USERS, [
      email,
      password,
    ]);

    const permissions = await client.query(
      oauthQueries.SELECT_ACCESS_FROM_ROLE_ACCESS,
      [result.rows[0].role_id]
    );

    await client.query("COMMIT");

    console.log(result.rows[0], permissions.rows);
    return { user: result.rows[0], permissions: permissions.rows };
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Transaction failed:", error);
    throw error;
  } finally {
    client.release();
  }
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
