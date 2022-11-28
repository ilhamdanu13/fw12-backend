const db = require("../helpers/db.helper");
const filter = require("../helpers/filter.helper");

exports.selectAllGenre = (filter, cb) => {
  const sql = `SELECT * FROM "genre" WHERE "name" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllGenre = (filter, cb) => {
  const sql = 'SELECT COUNT("name") AS "totalData" FROM "genre" WHERE "name" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};
exports.selectGenre = (id, cb) => {
  const sql = "SELECT * FROM genre WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertGenre = (data, cb) => {
  const sql = 'INSERT INTO genre ("name" ) VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateGenre = (data, cb) => {
  const sql = `UPDATE "genre" SET "name" = COALESCE(NULLIF($1, '')::VARCHAR, "name") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteGenre = (id, cb) => {
  const sql = 'DELETE FROM "genre" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
