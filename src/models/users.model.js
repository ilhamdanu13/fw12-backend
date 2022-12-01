const db = require("../helpers/db.helper");

exports.insertUser = (data, cb) => {
  const sql = 'INSERT INTO users ("picture", "firstName", "lastName", "phoneNumber", "email","password") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const value = [data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];
  db.query(sql, value, cb);
};

exports.selectAllUsers = (filter, cb) => {
  const sql = `SELECT * FROM "users" WHERE "email" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  return db.query(sql, value, cb);
};

exports.selectCountAllUsers = (filter, cb) => {
  const sql = 'SELECT COUNT("email") AS "totalData" FROM "users" WHERE "email" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
};
exports.selectUser = (id, cb) => {
  const sql = "SELECT * FROM users WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.updateUser = (id, data, cb) => {
  const sql = `UPDATE "users" SET "picture" = COALESCE(NULLIF($2, '')::VARCHAR, "picture"), "firstName" = COALESCE(NULLIF($3, '')::VARCHAR, "firstName"), "lastName" = COALESCE(NULLIF($4, '')::VARCHAR, "lastName"), "phoneNumber" = COALESCE(NULLIF($5, '')::VARCHAR, "phoneNumber"), "email" = COALESCE(NULLIF($6, '')::VARCHAR, "email"), "password" = COALESCE(NULLIF($7, '')::VARCHAR, "password") WHERE "id" = $1 RETURNING *`;
  const value = [id, data.picture, data.firstName, data.lastName, data.phoneNumber, data.email, data.password];
  db.query(sql, value, cb);
};

exports.deleteUser = (id, cb) => {
  const sql = 'DELETE FROM "users" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};

exports.selectUserByEmail = (email, cb) => {
  const sql = 'SELECT * FROM "users" WHERE email = $1';
  const value = [email];
  db.query(sql, value, cb);
};
