const connection = require("../config/database");

const HomePage = (req, res) => {
    let user = [];
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            user = results;
            console.log("Check results = ", results);
            res.send(JSON.stringify(user));
        }
    )

}

const EdanPage = (req, res) => {
    res.render('sample');
}
module.exports = {
    HomePage, EdanPage
};