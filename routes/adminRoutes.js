const express = require('express');
const router = express.Router();

// Controllers
const { dashboard, transactions, settings } = require('../controllers/adminControllers');

router.route('/').get(dashboard);
router.route('/settings').get(settings);
router.route('/transactions').get(transactions);

module.exports = router;
