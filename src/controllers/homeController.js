const connection = require("../config/database");

const HomePage = (req, res) => {
    return res.render('home');
}

const EdanPage = (req, res) => {
    res.render('sample');
}
module.exports = {
    HomePage, EdanPage
};