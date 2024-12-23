const express = require('express');
const {HomePage, CreatePage, CreateUser} = require('../controllers/homeController');
const router = express.Router();

router.get('/', HomePage);
router.get('/create', CreatePage);
router.post('/create-user', CreateUser);

module.exports = router;