const Pool = require("pg").Pool;

const pool = new Pool({
    user: "skyline",
    password: "raulcopilot_123456",
    host: "postgresql-skyline.alwaysdata.net",
    port: 5432,
    database: "skyline_legends",
});

module.exports = pool;
