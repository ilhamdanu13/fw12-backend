const db = require("../helpers/db.helper");

exports.selectAllTransactions = (cb) => {
  const sql = 'SELECT * FROM "transactions"';
  db.query(sql, cb);
};

exports.selectTransactions = (id, cb) => {
  const sql = 'SELECT * FROM "transactions" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertTransactions = (data, cb) => {
  const sql = 'INSERT INTO "transactions" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
  const value = [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.phoneNumber, data.statusId];
  db.query(sql, value, cb);
};

exports.updateTransactions = (data, cb) => {
  const sql = 'UPDATE "transactions" SET "bookingDate" = $1, "movieId" = $2, "cinemaId" = $3, "movieScheduleId" = $4, "fullName" = $5, "email" = $6, "phoneNumber" = $7, "statusId" = $8 WHERE "id" = $9 RETURNING *';
  const value = [data.body.bookingDate, data.body.movieId, data.body.cinemaId, data.body.movieScheduleId, data.body.fullName, data.body.email, data.body.phoneNumber, data.body.statusId, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteTransactions = (id, cb) => {
  const sql = 'DELETE FROM "transactions" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
