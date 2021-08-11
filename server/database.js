const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "nustiulol23",
  host: "localhost",
  port: 5432,
  database: "musicdb"
});

module.exports = pool;
