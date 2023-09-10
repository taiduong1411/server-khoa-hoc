const express = require('express');
const router = express.Router();
const AccountController = require('../controller/AccountController');
const auth = require('../middleware/auth');





router.post('/register', AccountController.postRegister);
router.post('/login', AccountController.postLogin);
router.get('/verify-email', auth, AccountController.getVerifyEmail);



module.exports = router;