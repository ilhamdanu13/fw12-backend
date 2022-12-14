const db = require("../helpers/db.helper");

exports.selectAllTransactions = (filter, cb) => {
  const sql = `SELECT * FROM "transactions" WHERE "email" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const value = [`%${filter.search}%`, filter.limit, filter.offset];
  db.query(sql, value, cb);
};

exports.selectCountAllTransactions = (filter, cb) => {
  const sql = 'SELECT COUNT("email") AS "totalData" FROM "transactions" WHERE "email" LIKE $1';
  const value = [`%${filter.search}%`];
  db.query(sql, value, cb);
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
  const sql = `UPDATE "transactions" SET "bookingDate" = COALESCE(NULLIF($1, '')::TIMESTAMPTZ, "bookingDate"), "movieId" = COALESCE(NULLIF($2, '')::INTEGER, "movieId"), "cinemaId" = COALESCE(NULLIF($3, '')::INTEGER, "cinemaId"), "movieScheduleId" = COALESCE(NULLIF($4, '')::INTEGER, "movieScheduleId"), "fullName" = COALESCE(NULLIF($5, '')VARCHAR, "fullName"), "email" = COALESCE(NULLIF($6, '')VARCHAR, "email"), "phoneNumber" = COALESCE(NULLIF($7, ''), "phoneNumber"), "statusId" = COALESCE(NULLIF($8, '')::INTEGER, "statusId") WHERE "id" = $9 RETURNING *`;
  const value = [data.body.bookingDate, data.body.movieId, data.body.cinemaId, data.body.movieScheduleId, data.body.fullName, data.body.email, data.body.phoneNumber, data.body.statusId, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteTransactions = (id, cb) => {
  const sql = 'DELETE FROM "transactions" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};

exports.orderTransaction = async (data, cb) => {
  try {
    await db.query("BEGIN");

    const sql = 'INSERT INTO "transaction" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId", "paymentMethodId") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const values = await db.query(sql, [data.bookingDate, data.movieId, data.cinemaId, data.movieScheduleId, data.fullName, data.email, data.statusId, data.paymentMethodId]);

    const sqlSeat = 'INSTERT INTO "reservedSeat" ("seatNum", "transactionId") VALUES ($1, $2) RETURNING *';
    const value = await db.query(sqlSeat, [data.seatNum, data.transactionId]);

    await db.query("COMMIT");
    const ordered = {
      transaction: values.rows[0],
      reservedSeat: value.rows,
    };
    cb(null, ordered);
  } catch (err) {
    await db.query("ROLLBACK");

    cb(err, null);
  }
};
