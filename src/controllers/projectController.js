const {
    createProject, getAllProject, updateProject, deleteProject
} = require('../services/productService');

const GetProjectsAPI = async (req, res) => {
    let result = await getAllProject(req.query);
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const CreateProjectsAPI = async (req, res) => {
    let result = await createProject(req.body);
    return res.status(200).json({
        errorCode: 0,
        data: result,
    })
}

const UpdateProjectsAPI = async (req, res) => {
    let result = await updateProject(req.body);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const DeleteProjectsAPI = async (req, res) => {
    let result = await deleteProject(req.body.id);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

module.exports = {GetProjectsAPI, CreateProjectsAPI, UpdateProjectsAPI, DeleteProjectsAPI};