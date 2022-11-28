const db = require("../helpers/db.helper");

exports.selectAllResetPassword = (filter, cb) => {
  const sql = `SELECT * FROM "resetPassword" WHERE "email" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllResetPassword = (filter, cb) => {
  const sql = 'SELECT COUNT("email") AS "totalData" FROM "resetPassword" WHERE "email" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};

exports.selectResetPassword = (id, cb) => {
  const sql = 'SELECT * FROM "resetPassword" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertResetPassword = (data, cb) => {
  const sql = 'INSERT INTO "resetPassword" ("email", "userId", "code" ) VALUES ($1, $2, $3) RETURNING *';
  const value = [data.email, data.userId, data.code];
  db.query(sql, value, cb);
};

exports.updateResetPassword = (data, cb) => {
  const sql = `UPDATE "resetPassword" SET "email" = COALESCE(NULLIF($1, '')::VARCHAR, "email"), "userId" = COALESCE(NULLIF($2, '')::INTEGER, "userId"), "code" = COALESCE(NULLIF($3, '')::VARCHAR, "code") WHERE "id" = $4 RETURNING *`;
  const value = [data.body.email, data.body.userId, data.body.code, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteResetPassword = (id, cb) => {
  const sql = 'DELETE FROM "resetPassword" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
