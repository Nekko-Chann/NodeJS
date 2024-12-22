require('dotenv').config();
const express = require('express');
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mySQL = require('mysql2');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

viewEngineConfig(app);

app.use('/', webRoutes);

const connection = mySQL.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.query(
    'SELECT * FROM users',
    function (err, results, fields) {
        console.log("Check results = ", results);
        console.log("Check fields = ", fields);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})