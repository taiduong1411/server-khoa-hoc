const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');
const auth = require('../middleware/auth');




router.post('/change-password', auth, StudentController.postChangePassword);


module.exports = router;