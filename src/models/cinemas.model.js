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
  const sql = `UPDATE "cinemas" SET "name" = COALESCE(NULLIF($1, '')::VARCHAR, "name"),"picture" = COALESCE(NULLIF($2, '')::VARCHAR, "picture"),"address" = COALESCE(NULLIF($3, '')::VARCHAR, "address"), "city" = COALESCE(NULLIF($4, '')::VARCHAR, "city") WHERE "id" = $5 RETURNING *`;
  const value = [data.body.name, data.body.picture, data.body.address, data.body.city, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteCinemas = (id, cb) => {
  const sql = 'DELETE FROM "cinemas" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
