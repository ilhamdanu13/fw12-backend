const db = require("../helpers/db.helper");

exports.selectAllMovieGenre = (cb) => {
  const sql = 'SELECT * FROM "movieGenre"';
  db.query(sql, cb);
};

exports.selectMovieGenre = (id, cb) => {
  const sql = 'SELECT * FROM "movieGenre" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertMovieGenre = (data, cb) => {
  const sql = 'INSERT INTO "movieGenre" ("movieId", "genreId" ) VALUES ($1, $2) RETURNING *';
  const value = [data.movieId, data.genreId];
  db.query(sql, value, cb);
};

exports.updateMovieGenre = (data, cb) => {
  const sql = `UPDATE "movieGenre" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "genreId" = COALESCE(NULLIF($2, '')::INTEGER, "movieId") WHERE "id" = $3 RETURNING *`;
  const value = [data.body.movieId, data.body.genreId, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovieGenre = (id, cb) => {
  const sql = 'DELETE FROM "movieGenre" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
