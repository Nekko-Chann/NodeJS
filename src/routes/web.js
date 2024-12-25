const express = require('express');
const {
    HomePage, CreatePage, CreateUser,
    UpdatePage, UpdateUser, DeletePage, DeleteUser
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        title: "NodeJS API",
        message: "NodeJS API Backend Zero",
        data: {
            auth: "Edan Nguyễn",
            website: "https://minhducnguyen.io.vn/",
            social: "https://www.facebook.com/EdanPrince2"
        }
    });
});

router.get('/home', HomePage);

router.get('/create', CreatePage);
router.post('/create-user', CreateUser);

router.get('/update/:id', UpdatePage);
router.post('/update-user', UpdateUser);

router.post('/delete-user', DeleteUser);
router.post('/delete-user/:id', DeletePage)

module.exports = router;