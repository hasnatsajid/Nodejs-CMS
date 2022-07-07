const express = require('express');
const router = express.Router();

// Controllers
const controllers = require('../controllers/componentControllers');

router.route('/buttons').get(controllers.buttons);
router.route('/notifications').get(controllers.notifications);
router.route('/forms').get(controllers.forms);
router.route('/modals').get(controllers.modals);
router.route('/typography').get(controllers.typography);
router.route('/tables').get(controllers.tables);

module.exports = router;
