const express = require('express');
const {HomePage, EdanPage, CreateUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', HomePage);
router.get('/edan', EdanPage);
router.post('/create-user', CreateUser);

module.exports = router;