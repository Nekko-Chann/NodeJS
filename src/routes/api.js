const express = require('express');
const {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI, DeleteUsersAPI,
    UploadSingleFileAPI, UploadMultipleFilesAPI
} = require('../controllers/userController');

const {
    GetCustomersAPI, CreateCustomersAPI, CreateManyCustomersAPI,
    UpdateCustomersAPI, DeleteCustomerAPI, DeleteManyCustomersAPI
} = require('../controllers/customerController');

const {
    GetProjectsAPI, CreateProjectsAPI, UpdateProjectsAPI, DeleteProjectsAPI
} = require('../controllers/projectController');

const {
    GetTasksAPI, CreateTasksAPI, UpdateTasksAPI, DeleteTasksAPI
} = require('../controllers/taskController');

const routerAPI = express.Router();

//User
routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', CreateUsersAPI);

routerAPI.put('/users', UpdateUsersAPI);

routerAPI.delete('/users', DeleteUsersAPI);

routerAPI.post('/file', UploadSingleFileAPI);

routerAPI.post('/files', UploadMultipleFilesAPI);

//Customer
routerAPI.get('/customers', GetCustomersAPI);

routerAPI.post('/customers', CreateCustomersAPI);

routerAPI.post('/many-customers', CreateManyCustomersAPI);

routerAPI.put('/customers', UpdateCustomersAPI);

routerAPI.delete('/customers', DeleteCustomerAPI);

routerAPI.delete('/many-customers', DeleteManyCustomersAPI);

//Project
routerAPI.get('/projects', GetProjectsAPI);

routerAPI.post('/projects', CreateProjectsAPI);

routerAPI.put('/projects', UpdateProjectsAPI);

routerAPI.delete('/projects', DeleteProjectsAPI);

//task
routerAPI.get('/tasks', GetTasksAPI);
routerAPI.post('/tasks', CreateTasksAPI);
routerAPI.put('/tasks', UpdateTasksAPI);
routerAPI.delete('/tasks', DeleteTasksAPI);

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