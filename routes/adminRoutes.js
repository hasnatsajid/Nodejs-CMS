const express = require('express');
const router = express.Router();

// Controllers
const controllers = require('../controllers/adminControllers');

router.route('/').get(controllers.dashboard);
router.route('/settings').get(controllers.settings);
router.route('/transactions').get(controllers.transactions);

module.exports = router;
