// config.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "neondb_owner", // username
  host: "ep-bitter-dew-ad8ohllq-pooler.c-2.us-east-1.aws.neon.tech", // updated host
  database: "neondb", // database name
  password: "npg_TLtl3vKZ7Sue", // updated password
  port: 5432, // default postgres port
  ssl: { rejectUnauthorized: false }, // ssl required
});

module.exports = pool;
