require('dotenv').config();
const express = require('express');
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

viewEngineConfig(app);

app.use('/', webRoutes);

connection.query(
    'SELECT * FROM users',
    function (err, results, fields) {
        console.log("Check results = ", results);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})