const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
    port: 3306,

});

const promisePool = pool.promise();


module.exports = { promisePool };
