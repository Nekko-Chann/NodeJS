const connection = require("../config/database");
const { getUserById, createUser, updateUserById, deleteUserById} = require("../services/crudService");
const User = require("../models/user");

const HomePage = async (req, res) => {
    let result = await User.find({});
    return res.render('home', {listUsers: result});
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    await createUser(name, email, city);
    res.send('Create User Successfully');
}

const UpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('update', {userUpdate: user});
}

const UpdateUser = async (req, res) => {
    let {userId, name, email, city} = req.body;
    await updateUserById(name, email, city, userId);
    res.redirect('/');
}

const DeletePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('delete', {userDelete: user});
}

const DeleteUser = async (req, res) => {
    const {userId} = req.body;
    await deleteUserById(userId);
    res.redirect('/');
}

module.exports = {
    HomePage, CreatePage, CreateUser, UpdatePage, UpdateUser, DeletePage, DeleteUser
};