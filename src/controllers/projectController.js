const {createProjects} = require('../services/productService');

const CreateProjectsAPI = async (req, res) => {
    let result = await createProjects(req.body);
    return res.status(200).json({
        errorCode: 0,
        data: result,
    })
}

module.exports = {CreateProjectsAPI};