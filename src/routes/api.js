const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI, DeleteUsersAPI,
    UploadSingleFileAPI, UploadMultipleFilesAPI
} = require('../controllers/userController');

const {
    GetCustomersAPI, CreateCustomersAPI, CreateManyCustomersAPI,
    UpdateCustomersAPI, DeleteCustomerAPI, DeleteManyCustomersAPI
} = require('../controllers/customerController');

const routerAPI = express.Router();

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

routerAPI.delete('/customers', DeleteCustomerAPI);

routerAPI.delete('/many-customers', DeleteManyCustomersAPI);

routerAPI.get('/info', (req, res) => {
    res.status(200).send({
        data: req.query
    })
});

routerAPI.get('/info/:name/:address/:phone/:email', (req, res) => {
    res.status(200).send({
        data: req.params
    })
});

module.exports = routerAPI;