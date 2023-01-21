const { Pool } = require("pg");

console.log(process.env.DATABASE_URL);
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;
