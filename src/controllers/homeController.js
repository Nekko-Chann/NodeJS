const connection = require("../config/database");

const HomePage = (req, res) => {
    return res.render('home');
}

const EdanPage = (req, res) => {
    res.render('sample');
}

const CreateUser = (req, res) => {
    console.log("Check req: ", req.body);
    res.send('create-user');
}
module.exports = {
    HomePage, EdanPage, CreateUser,
};