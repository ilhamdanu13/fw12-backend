const db = require("../helpers/db.helper");

exports.selectAllCinemas = (cb) => {
  const sql = "SELECT * FROM cinemas";
  db.query(sql, cb);
};

exports.selectCinemas = (id, cb) => {
  const sql = "SELECT * FROM cinemas WHERE id = $1";
  const value = [id];
  return db.query(sql, value, cb);
};

exports.insertCinemas = (data, cb) => {
  const sql = 'INSERT INTO cinemas ("picture", "name", "address", "city" ) VALUES ($1, $2, $3, $4) RETURNING *';
  const value = [data.picture, data.name, data.address, data.city];
  db.query(sql, value, cb);
};

exports.updateCinemas = (data, cb) => {
  const sql = 'UPDATE "cinemas" SET "name" = $1 WHERE "id" = $2 RETURNING *';
  const value = [data.body.name, data.params.id];
  db.query(sql, value, cb);
};

exports.deleteCinemas = (id, cb) => {
  const sql = 'DELETE FROM "cinemas" WHERE "id" = $1 RETURNING *';
  const value = [id];
  db.query(sql, value, cb);
};
