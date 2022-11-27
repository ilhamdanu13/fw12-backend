const db = require("../helpers/db.helper");

exports.selectAllCinemas = (filter, cb) => {
  const sql = `SELECT * FROM "cinemas" WHERE "name" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllCinemas = (filter, cb) => {
  const sql = 'SELECT COUNT("name") AS "totalData" FROM "cinemas" WHERE "name" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectCinemas = (id, cb) => {
  const sql = "SELECT * FROM cinemas WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertCinemas = (data, cb) => {
  const sql = 'INSERT INTO cinemas ("picture", "name", "address", "city" ) VALUES ($1, $2, $3, $4) RETURNING *';
  const value = [data.picture, data.name, data.address, data.city];
  db.query(sql, value, cb);
};

exports.updateCinemas = (data, cb) => {
  const sql = `UPDATE "cinemas" SET "name" = COALESCE(NULLIF($1, ''), "name") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteCinemas = (id, cb) => {
  const sql = 'DELETE FROM "cinemas" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
