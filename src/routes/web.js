const express = require('express');
const {
    HomePage, CreatePage, CreateUser,
    UpdatePage, UpdateUser
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', HomePage);

router.get('/create', CreatePage);
router.post('/create-user', CreateUser);

router.get('/update/:id', UpdatePage);
router.post('/update-user', UpdateUser);

module.exports = router;