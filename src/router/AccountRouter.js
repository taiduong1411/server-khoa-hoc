const express = require('express');
const router = express.Router();
const AccountController = require('../controller/AccountController');
const StudentController = require('../controller/StudentController');
const auth = require('../middleware/auth');





router.post('/register', AccountController.postRegister);
router.post('/login', AccountController.postLogin);

router.get('/verify-email', auth, AccountController.getVerifyEmail);
router.get('/logout', AccountController.getLogout);



module.exports = router;