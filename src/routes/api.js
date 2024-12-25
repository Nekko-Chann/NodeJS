const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI, DeleteUsersAPI,
    UploadSingleFileAPI, UploadMultipleFilesAPI,
} = require('../controllers/userController');

const {
    GetCustomersAPI,
    CreateCustomersAPI,
    CreateManyCustomersAPI,
    UpdateCustomersAPI
} = require('../controllers/customerController');

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

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', CreateUsersAPI);

routerAPI.put('/users', UpdateUsersAPI);

routerAPI.delete('/users', DeleteUsersAPI);

routerAPI.post('/file', UploadSingleFileAPI);

routerAPI.post('/files', UploadMultipleFilesAPI);

routerAPI.get('/customers', GetCustomersAPI);

routerAPI.post('/customers', CreateCustomersAPI);

routerAPI.post('/many-customers', CreateManyCustomersAPI);

routerAPI.put('/customers', UpdateCustomersAPI);

module.exports = routerAPI;