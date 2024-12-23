const connection = require("../config/database");
const {getAllUsers, getUserById} = require("../services/crudService");

const HomePage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('home', {listUsers: result});
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    console.log("Check name: ", name, "Check email: ", email, "Check city: ", city);
    let [result, fields] = await connection.query(
        `INSERT INTO users (email, name, city)
         VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("Check result: ", result);
    res.send('Create User Successfully');
}

const UpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserById(userID);
    res.render('update', {userUpdate: user});
}

module.exports = {
    HomePage, CreatePage, CreateUser, UpdatePage
};