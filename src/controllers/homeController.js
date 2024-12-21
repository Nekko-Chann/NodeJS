const HomePage = (req, res) => {
    res.send('Hello World with Edan Nguyen');
}

const EdanPage = (req, res) => {
    res.render('sample');
}
module.exports = {
    HomePage, EdanPage
};