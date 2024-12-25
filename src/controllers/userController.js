const User = require("../models/user");
const {uploadSingleFile, uploadMultipleFiles} = require("../services/fileService")

const getUsersAPI = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: result
    });
}

const CreateUsersAPI = async (req, res) => {
    let {name, email, city} = req.body;
    let user = await User.create({
        name: name,
        email: email,
        city: city
    });
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const UpdateUsersAPI = async (req, res) => {
    let {name, email, city, userId} = req.body;
    let user = await User.updateOne({_id: userId}, {name: name, email: email, city: city});
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const DeleteUsersAPI = async (req, res) => {
    let {userId} = req.body;
    let user = await User.deleteOne({_id: userId});
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const UploadSingleFileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingleFile(req.files.image);
    return res.status(200).json(
        {
            errorCode: 0,
            data: result
        }
    )
}

const UploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    if (Array.isArray(req.files.image)) {
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    } else {
        return await UploadSingleFileAPI(req, res);
    }
}

module.exports = {
    getUsersAPI, CreateUsersAPI, UpdateUsersAPI, DeleteUsersAPI,
    UploadSingleFileAPI, UploadMultipleFilesAPI
};