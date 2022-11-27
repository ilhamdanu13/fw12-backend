const db = require("../helpers/db.helper");

exports.selectAllReservedSeat = (filter, cb) => {
  const sql = `SELECT * FROM "reservedSeat" WHERE "seatNum" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllReservedSeat = (filter, cb) => {
  const sql = 'SELECT COUNT("seatNum") AS "totalData" FROM "reservedSeat" WHERE "seatNum" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
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
  const sql = `UPDATE "reservedSeat" SET "seatNum" = COALESCE(NULLIF($1, ''), "seatNum") WHERE "id" = $2 RETURNING *`;
  const value = [data.body.seatNum, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteReservedSeat = (id, cb) => {
  const sql = 'DELETE FROM "reservedSeat" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
