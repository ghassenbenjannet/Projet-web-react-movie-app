const express = require('express');
const router = express.Router();
const frontManagementController = require('../Controllers/frontManagementController');


router.get('/home', frontManagementController.home);


module.exports = router;
