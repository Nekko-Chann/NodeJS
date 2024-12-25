const express = require('express');
const {
    getUsersAPI
} = require('../controllers/apiController');

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: "success api"
    });
});

routerAPI.get('/users',getUsersAPI);

module.exports = routerAPI;