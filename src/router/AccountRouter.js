const express = require('express');
const router = express.Router();
const AccountController = require('../controller/AccountController');

router.post('/register', AccountController.postRegister);
router.post('/login', AccountController.postLogin);




module.exports = router;