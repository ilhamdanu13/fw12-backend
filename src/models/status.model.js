const db = require("../helpers/db.helper");

exports.selectAllStatus = (cb) => {
  const sql = 'SELECT * FROM "status"';
  db.query(sql, cb);
};

exports.selectStatus = (id, cb) => {
  const sql = 'SELECT * FROM "status" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertStatus = (data, cb) => {
  const sql = 'INSERT INTO "status" ("name") VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateStatus = (data, cb) => {
  const sql = 'UPDATE "status" SET "name" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteStatus = (id, cb) => {
  const sql = 'DELETE FROM "status" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
