const INSERT_INTO_USERS =
  "insert into users(name, email, password) values($1, $2, $3) returning id, email, name, role_id";

const SELECT_FROM_USERS =
  "select id, name, email, role_id from users where email = $1 and password = $2";

const SELECT_FROM_USERS_BY_ID =
  "select id, email, name, role_id from users where id = $1 and email = $2";

const SELECT_FROM_ROLES = "select role from roles where id = $1";

module.exports = {
  INSERT_INTO_USERS,
  SELECT_FROM_USERS,
  SELECT_FROM_USERS_BY_ID,
  SELECT_FROM_ROLES,
};
