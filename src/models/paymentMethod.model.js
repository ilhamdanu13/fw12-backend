const db = require("../helpers/db.helper");

exports.selectAllPaymentMethod = (cb) => {
  const sql = 'SELECT * FROM "paymentMethod"';
  db.query(sql, cb);
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
  const sql = 'UPDATE "paymentMethod" SET "name" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deletePaymentMethod = (id, cb) => {
  const sql = 'DELETE FROM "paymentMethod" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
