const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: '127.1.0.0',
    database: "posts",
    user: "roots",
    password: "Damsel850"
})

