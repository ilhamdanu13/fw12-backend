const db = require("../helpers/db.helper");

exports.selectAllCasts = (filter, cb) => {
  const sql = `SELECT * FROM casts WHERE name LIKE $3 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $1 OFFSET $2`;
  const value = [filter.limit, filter.offset, `%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectCountAllCasts = (filter, cb) => {
  const sql = `SELECT COUNT(*) AS "totalData" FROM "casts" WHERE name LIKE $1`;
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectCasts = (id, cb) => {
  const sql = "SELECT * FROM casts WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertCasts = (data, cb) => {
  const sql = 'INSERT INTO casts ("name" ) VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateCasts = (data, cb) => {
  const sql = `UPDATE "casts" SET "name" = COALESCE(NULLIF($1, ''), "name") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteCasts = (id, cb) => {
  const sql = 'DELETE FROM "casts" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
