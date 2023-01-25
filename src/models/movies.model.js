const db = require("../helpers/db.helper");

exports.selectAllMovies = (filter, cb) => {
  const sql = `SELECT m.*, string_agg( g.name, ', ') as genre
  FROM movies m
  JOIN "movieGenre" mg on mg."movieId" = m.id
  LEFT JOIN genre g on g.id = mg."genreId" 
  WHERE "title" LIKE $1 
  GROUP by m.id 
  ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllMovies = (filter, cb) => {
  const sql = 'SELECT COUNT("title") AS "totalData" FROM "movies" WHERE "title" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectMovies = (id, cb) => {
  const sql = `SELECT m.*, string_agg(DISTINCT c.name, ', ') AS casts, string_agg(DISTINCT g.name, ', ') AS genre
  FROM movies m 
  LEFT JOIN "movieCasts" mc on mc."movieId" = m.id
  LEFT JOIN casts c on c.id = mc."castsId"
  LEFT JOIN "movieGenre" mg on mg."movieId" = m.id
  LEFT JOIN genre g on g.id = mg."genreId"
  WHERE m.id = $1
  GROUP BY m.id`;
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

exports.upcomingMovie = (data, cb) => {
  const sql = `SELECT m.*,  string_agg(DISTINCT g.name, ', ') AS genre FROM movies m
  LEFT JOIN "movieGenre" mg on mg."movieId" = m.id
LEFT JOIN genre g on g.id = mg."genreId" WHERE date_part('year', "releaseDate")::TEXT = COALESCE(NULLIF($1,''), date_part('year', current_date)::TEXT) AND date_part('month', "releaseDate")::TEXT = COALESCE(NULLIF($2,''), date_part('month', current_date)::TEXT) GROUP BY m.id`;
  const value = [data.year, data.month];
  return db.query(sql, value, cb);
};

exports.nowShowing = (cb) => {
  const sql = `SELECT m.id, m.title, m.picture, ms."startDate", ms."endDate", string_agg(g.name, ', ') AS genre
  FROM movies m
  JOIN "movieSchedules" ms ON ms."movieId" = m.id
  LEFT JOIN "movieGenre" mg ON mg."movieId" = m.id
  LEFT JOIN genre g ON g.id = mg."genreId"
  WHERE current_date BETWEEN ms."startDate" AND ms."endDate" GROUP BY m.id, ms.id`;
  return db.query(sql, cb);
};
