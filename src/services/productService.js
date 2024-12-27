const Project = require('../models/Project');

const createProjects = async (data) => {
    try {
        if (data.type === "EMPTY-PROJECT") {
            return await Project.create(data);
        }
        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();
            for (let i = 0; i < data.usersArray.length; i++) {
                myProject.usersInfor.push(data.usersArray[i]);
            }

            return await myProject.save();
        }
    } catch (err) {
        return null;
    }
}

module.exports = {createProjects}