const db = require("../helpers/db.helper");

exports.selectAllGenre = (cb) => {
  const sql = "SELECT * FROM genre";
  db.query(sql, cb);
};

exports.selectGenre = (id, cb) => {
  const sql = "SELECT * FROM genre WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertGenre = (data, cb) => {
  const sql = 'INSERT INTO genre ("name" ) VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateGenre = (data, cb) => {
  const sql = 'UPDATE "genre" SET "name" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteGenre = (id, cb) => {
  const sql = 'DELETE FROM "genre" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
