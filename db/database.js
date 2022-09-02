const mysql = require("mysql");

const pool = mysql.createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PW,
    database: "notes-app-schema",
    connectionLimit: 10,
    //   insecureAuth : true,
});

module.exports = pool;

