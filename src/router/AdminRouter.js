const express = require('express');
const router = express.Router();
const AdminController = require('../controller/AdminController');
const auth = require('../middleware/auth');
const adminRole = require('../middleware/AdminRole');

router.get('/all-student', auth, adminRole, AdminController.getAllStudent);
router.get('/all-teacher', auth, adminRole, AdminController.getAllTeacher);

module.exports = router;
