const db = require("../helpers/db.helper");

exports.selectAllSubscriber = (cb) => {
  const sql = 'SELECT * FROM "subscribers"';
  db.query(sql, cb);
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
  const sql = 'UPDATE "subscribers" SET "email" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.email, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteSubscriber = (id, cb) => {
  const sql = 'DELETE FROM "subscribers" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
