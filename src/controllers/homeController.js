const connection = require("../config/database");

const HomePage = (req, res) => {
    return res.render('home');
}

const CreatePage = (req, res) => {
    res.render('create');
}

const CreateUser = async (req, res) => {
    let {name, email, city} = req.body;
    console.log("Check name: ", name, "Check email: ", email, "Check city: ", city);
    // connection.query(
    //     `INSERT INTO users (email, name, city)
    //      VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, result) {
    //         console.log(result);
    //         res.send('Create User Successfully');
    //     }
    // )
    let [result, fields] = await connection.query(
        `INSERT INTO users (email, name, city)
         VALUES (?, ?, ?)`, [email, name, city]
    );
    console.log("Check result: ", result);
    res.send('Create User Successfully');
}
module.exports = {
    HomePage, CreatePage, CreateUser,
};