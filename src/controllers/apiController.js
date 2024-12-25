const User = require("../models/user");
// const {createUsersAPI} = require("../services/apiService");

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

module.exports = {getUsersAPI, CreateUsersAPI, UpdateUsersAPI};