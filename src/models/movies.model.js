const db = require("../helpers/db.helper");

exports.selectAllMovies = (filter, cb) => {
  const sql = `SELECT * FROM "movies" WHERE "title" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllMovies = (filter, cb) => {
  const sql = 'SELECT COUNT("title") AS "totalData" FROM "movies" WHERE "title" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
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
  const sql = `UPDATE "movies" SET "title" = COALESCE(NULLIF($1, '')::VARCHAR, "title"), "picture" = COALESCE(NULLIF($2, '')::VARCHCAR, "picture"), "releaseDate" = COALESCE(NULLIF($3, '')::TIMESTAMPTZ, "releaseDate"), "director" = COALESCE(NULLIF($4, '')::VARCHAR, "director"), "duration" = COALESCE(NULLIF($5, '')::TIME, "duration"), "synopsis" = COALESCE(NULLIF($6, '')::TEXT, "synopsis") WHERE "id" = $7 RETURNING *`;
  const value = [data.body.title, data.body.picture, data.body.releaseDate, data.body.director, data.body.duration, data.body.synopsis, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteMovies = (id, cb) => {
  const sql = 'DELETE FROM "movies" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
