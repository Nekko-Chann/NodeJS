require('dotenv').config();
const express = require('express');
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

viewEngineConfig(app);

app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})