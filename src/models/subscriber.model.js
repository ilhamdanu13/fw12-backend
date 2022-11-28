const db = require("../helpers/db.helper");

exports.selectAllSubscriber = (filter, cb) => {
  const sql = `SELECT * FROM "subscribers" WHERE "email" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllSubscriber = (filter, cb) => {
  const sql = 'SELECT COUNT("email") AS "totalData" FROM "subscribers" WHERE "email" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};
exports.selectSubscriber = (id, cb) => {
  const sql = 'SELECT * FROM "subscribers" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertSubscriber = (data, cb) => {
  const sql = 'INSERT INTO "subscribers" ("email" ) VALUES ($1) RETURNING *';
  const value = [data.email];
  db.query(sql, value, cb);
};

exports.updateSubscriber = (data, cb) => {
  const sql = `UPDATE "subscribers" SET "email" = COALESCE(NULLIF($1, '')::VARCHAR, "email") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.email, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteSubscriber = (id, cb) => {
  const sql = 'DELETE FROM "subscribers" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
