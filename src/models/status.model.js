const db = require("../helpers/db.helper");

exports.selectAllStatus = (filter, cb) => {
  const sql = `SELECT * FROM "status" WHERE "name" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllStatus = (filter, cb) => {
  const sql = 'SELECT COUNT("name") AS "totalData" FROM "status" WHERE "name" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectStatus = (id, cb) => {
  const sql = 'SELECT * FROM "status" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertStatus = (data, cb) => {
  const sql = 'INSERT INTO "status" ("name") VALUES ($1) RETURNING *';
  const value = [data.name];
  db.query(sql, value, cb);
};

exports.updateStatus = (data, cb) => {
  const sql = `UPDATE "status" SET "name" = COALESCE(NULLIF($1, ''), "name") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteStatus = (id, cb) => {
  const sql = 'DELETE FROM "status" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
