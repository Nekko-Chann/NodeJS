require('dotenv').config();
const express = require('express');
const viewEngineConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

viewEngineConfig(app);

app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`);
        });
    } catch (error) {
        console.log("Error connection: ", error);
    }
})()

