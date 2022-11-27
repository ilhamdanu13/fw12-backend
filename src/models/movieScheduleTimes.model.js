const db = require("../helpers/db.helper");

exports.selectAllMovieScheduleTimes = (cb) => {
  const sql = 'SELECT * FROM "movieScheduleTimes"';
  db.query(sql, cb);
};

exports.selectMovieScheduleTimes = (id, cb) => {
  const sql = 'SELECT * FROM "movieScheduleTimes" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertMovieScheduleTimes = (data, cb) => {
  const sql = 'INSERT INTO "movieScheduleTimes" ("time") VALUES ($1) RETURNING *';
  const value = [data.time];
  db.query(sql, value, cb);
};

exports.updateMovieScheduleTimes = (data, cb) => {
  const sql = `UPDATE "movieScheduleTimes" SET "time" = COALESCE(NULLIF($1, ''), "time") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.time, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovieScheduleTimes = (id, cb) => {
  const sql = 'DELETE FROM "movieScheduleTimes" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
