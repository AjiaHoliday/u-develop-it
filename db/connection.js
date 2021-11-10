const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Hufflepuff0404!',
    database: 'election'
});

module.exports = db;