const db = require("../helpers/db.helper");

exports.selectAllCasts = (cb) => {
  const sql = "SELECT * FROM casts";
  db.query(sql, cb);
};

exports.selectCasts = (id, cb) => {
  const sql = "SELECT * FROM casts WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertCasts = (data, cb) => {
  const sql = 'INSERT INTO casts ("name" ) VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateCasts = (data, cb) => {
  const sql = 'UPDATE "casts" SET "name" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteCasts = (id, cb) => {
  const sql = 'DELETE FROM "casts" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
