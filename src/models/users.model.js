const db = require("../helpers/db.helper");

exports.insertUser = (data, cb) => {
  const sql = 'INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email","password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];
  db.query(sql, value, cb);
};

exports.selectAllUsers = (cb) => {
  const sql = "SELECT * FROM users";
  return db.query(sql, cb);
};

exports.selectUser = (id, cb) => {
  const sql = "SELECT * FROM users WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.updateUser = (data, cb) => {
  const sql = 'UPDATE "users" SET "lastName" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.lastName, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteUser = (id, cb) => {
  const sql = 'DELETE FROM "users" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
