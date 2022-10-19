const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "products",
    password: "2102",
    port: 5432,
});

module.exports = pool;