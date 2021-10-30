const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "todo_database",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
