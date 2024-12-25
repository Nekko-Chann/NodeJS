const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI, DeleteUsersAPI,
    UploadSingleFileAPI, UploadMultipleFilesAPI
} = require('../controllers/userController');

const {
    GetCustomersAPI, CreateCustomersAPI, CreateManyCustomersAPI, UpdateCustomersAPI, DeleteCustomerAPI
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

module.exports = routerAPI;