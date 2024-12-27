const {getAllTask, createTask, updateTask, deleteTask} = require('../services/taskService');

const GetTasksAPI = async (req, res) => {
    let result = await getAllTask(req.query);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const CreateTasksAPI = async (req, res) => {
    let result = await createTask(req.body);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const UpdateTasksAPI = async (req, res) => {
    let result = await updateTask(req.body);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const DeleteTasksAPI = async (req, res) => {
    let result = await deleteTask(req.body.id);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

module.exports = {GetTasksAPI, CreateTasksAPI, UpdateTasksAPI, DeleteTasksAPI};