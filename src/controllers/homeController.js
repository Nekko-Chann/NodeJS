const connection = require("../config/database");

const HomePage = (req, res) => {
    return res.render('home');
}

const EdanPage = (req, res) => {
    res.render('sample');
}

const CreateUser = (req, res) => {
    let {name, email, city} = req.body;
    console.log("Check name: ", name, "Check email: ", email, "Check city: ", city);
    connection.query(
        `INSERT INTO users (email, name, city)
         VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, result) {
            console.log(result);
            res.send('Create User Successfully');
        }
    )
}
module.exports = {
    HomePage, EdanPage, CreateUser,
};