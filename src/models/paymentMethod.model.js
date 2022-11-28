const db = require("../helpers/db.helper");

exports.selectAllPaymentMethod = (filter, cb) => {
  const sql = `SELECT * FROM "paymentMethod" WHERE "name" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllMethod = (filter, cb) => {
  const sql = 'SELECT COUNT("name") AS "totalData" FROM "paymentMethod" WHERE "name" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectPaymentMethod = (id, cb) => {
  const sql = 'SELECT * FROM "paymentMethod" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertPaymentMethod = (data, cb) => {
  const sql = 'INSERT INTO "paymentMethod" ("name", "picture" ) VALUES ($1, $2) RETURNING *';
  const value = [data.name, data.picture];
  db.query(sql, value, cb);
};

exports.updatePaymentMethod = (data, cb) => {
  const sql = `UPDATE "paymentMethod" SET "name" = COALESCE(NULLIF($1, '')::VARCHAR, "name"), "picture" = COALESCE(NULLIF($2, '')::VARCHAR, "picture") WHERE "id" = $3 RETURNING *`;
  const value = [data.body.name, data.body.picture, data.params.id];
  db.query(sql, value, cb);
};

exports.deletePaymentMethod = (id, cb) => {
  const sql = 'DELETE FROM "paymentMethod" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
