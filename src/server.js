const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/edan', (req, res) => {
    res.render('sample');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})