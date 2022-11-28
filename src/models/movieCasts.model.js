const db = require("../helpers/db.helper");

exports.selectAllMovieCasts = (cb) => {
  const sql = 'SELECT * FROM "movieCasts"';
  db.query(sql, cb);
};

exports.selectMovieCasts = (id, cb) => {
  const sql = 'SELECT * FROM "movieCasts" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertMovieCasts = (data, cb) => {
  const sql = 'INSERT INTO "movieCasts" ("movieId", "castsId" ) VALUES ($1, $2) RETURNING *';
  const value = [data.movieId, data.castsId];
  db.query(sql, value, cb);
};

exports.updateMovieCasts = (data, cb) => {
  const sql = `UPDATE "movieCasts" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "castsId" = COALESCE(NULLIF($2, '')::INTEGER, "castsId") WHERE "id" = $3 RETURNING *`;
  const value = [data.body.movieId, data.body.castsId, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovieCasts = (id, cb) => {
  const sql = 'DELETE FROM "movieCasts" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
