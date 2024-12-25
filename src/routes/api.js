const express = require('express');
const {
    getUsersAPI, CreateUsersAPI
} = require('../controllers/apiController');

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    res.status(200).json({
        title: "NodeJS API",
        message: "NodeJS API Backend Zero",
        data: {
            auth: "Edan Nguyễn",
            website: "https://minhducnguyen.io.vn/",
            social: "https://www.facebook.com/EdanPrince2"
        }
    });
});

routerAPI.get('/users',getUsersAPI);

routerAPI.post('/users', CreateUsersAPI);

module.exports = routerAPI;