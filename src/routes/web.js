const express = require('express');
const {HomePage, EdanPage} = require('../controllers/homeController');
const router = express.Router();

router.get('/', HomePage);
router.get('/edan', EdanPage);

module.exports = router;