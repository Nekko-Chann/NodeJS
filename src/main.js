require('dotenv').config();
const express = require('express');
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

viewEngineConfig(app);

app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})