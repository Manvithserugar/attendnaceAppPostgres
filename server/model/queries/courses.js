const INSERT_INTO_CLASSES = "insert into classes(name) values($1)";
const SELECT_FROM_CLASSES = "select * from classes";
const DELETE_FROM_CLASSES = "delete from classes where id = $1";

module.exports = {
  INSERT_INTO_CLASSES,
  SELECT_FROM_CLASSES,
  DELETE_FROM_CLASSES,
};
