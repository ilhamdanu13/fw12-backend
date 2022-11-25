const db = require("../helpers/db.helper");

exports.selectAllResetPassword = (cb) => {
  const sql = 'SELECT * FROM "resetPassword"';
  db.query(sql, cb);
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
  const sql = 'UPDATE "resetPassword" SET "email" = $1, "userId" = $2, "code" = $3 WHERE "id" = $4 RETURNING *';
  const value = [data.body.email, data.body.userId, data.body.code, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteResetPassword = (id, cb) => {
  const sql = 'DELETE FROM "resetPassword" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
