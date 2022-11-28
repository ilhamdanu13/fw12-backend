const db = require("../helpers/db.helper");

exports.selectAllMovieSchedules = (cb) => {
  const sql = 'SELECT * FROM "movieSchedules"';
  db.query(sql, cb);
};

exports.selectMovieSchedules = (id, cb) => {
  const sql = 'SELECT * FROM "movieSchedules" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertMovieSchedules = (data, cb) => {
  const sql = 'INSERT INTO "movieSchedules" ("movieId", "cinemaId", "price", "startDate", "endDate") VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const value = [data.movieId, data.cinemaId, data.price, data.startDate, data.endDate];
  db.query(sql, value, cb);
};

exports.updateMovieSchedules = (data, cb) => {
  const sql = `UPDATE "movieSchedules" SET "movieId" = COALESCE(NULLIF($1, '')::INTEGER, "movieId"), "cinemaId" = COALESCE(NULLIF($2, '')::INTEGER, "cinemaId"), "price" = COALESCE(NULLIF($3, '')::INTEGER, "price"), "startDate" = COALESCE(NULLIF($4, '')::DATE, "startDate"), "endDate" = COALESCE(NULLIF($5, '')::DATE, "endDate") WHERE "id" = $6 RETURNING *`;
  const value = [data.body.movieId, data.body.cinemaId, data.body.price, data.body.startDate, data.body.endDate, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovieSchedules = (id, cb) => {
  const sql = 'DELETE FROM "movieSchedules" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
