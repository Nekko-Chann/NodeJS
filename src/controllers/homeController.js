const connection = require("../config/database");
const {getAllUsers} = require("../services/crudService");

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

const UpdatePage = (req, res) => {
    res.render('update');
}

module.exports = {
    HomePage, CreatePage, CreateUser,UpdatePage
};