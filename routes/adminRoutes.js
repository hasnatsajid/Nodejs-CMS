const express = require('express');
const router = express.Router();

// Controllers
const controllers = require('../controllers/adminControllers');

router.route('/dashboard').get(controllers.dashboard);

module.exports = router;
