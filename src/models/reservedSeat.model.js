const db = require("../helpers/db.helper");

exports.selectAllReservedSeat = (cb) => {
  const sql = 'SELECT * FROM "reservedSeat"';
  db.query(sql, cb);
};

exports.selectReservedSeat = (id, cb) => {
  const sql = 'SELECT * FROM "reservedSeat" WHERE id = $1';
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertReservedSeat = (data, cb) => {
  const sql = 'INSERT INTO "reservedSeat" ("seatNum", "transactionId" ) VALUES ($1, $2) RETURNING *';
  const value = [data.seatNum, data.transactionId];
  db.query(sql, value, cb);
};

exports.updateReservedSeat = (data, cb) => {
  const sql = 'UPDATE "reservedSeat" SET "seatNum" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.seatNum, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteReservedSeat = (id, cb) => {
  const sql = 'DELETE FROM "reservedSeat" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
