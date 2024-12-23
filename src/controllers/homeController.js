const connection = require("../config/database");
const {getAllUsers, getUserById, createUser, updateUserById} = require("../services/crudService");

const HomePage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('home', {listUsers: result});
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    await createUser(email, name, city);
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

module.exports = {
    HomePage, CreatePage, CreateUser, UpdatePage, UpdateUser
};