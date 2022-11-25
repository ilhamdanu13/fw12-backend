const db = require("../helpers/db.helper");

exports.selectAllMovies = (cb) => {
  const sql = "SELECT * FROM movies";
  db.query(sql, cb);
};

exports.selectMovies = (id, cb) => {
  const sql = "SELECT * FROM movies WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertMovies = (data, cb) => {
  const sql = 'INSERT INTO movies ("title", "picture", "releaseDate", "director", "duration", "synopsis" ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.title, data.picture, data.releaseDate, data.director, data.duration, data.synopsis];
  db.query(sql, value, cb);
};

exports.updateMovies = (data, cb) => {
  const sql = 'UPDATE "movies" SET "title" = $1, "picture" = $2, "releaseDate" = $3, "director" = $4, "duration" = $5, "synopsis" = $6 WHERE "id" = $7 RETURNING *';
  const value = [data.body.title, data.body.picture, data.body.releaseDate, data.body.director, data.body.duration, data.body.synopsis, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovies = (id, cb) => {
  const sql = 'DELETE FROM "movies" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
