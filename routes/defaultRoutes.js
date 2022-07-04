const express = require('express');
const router = express.Router();

// Controllers
const controllers = require('../controllers/defaultControllers');

router.route('/').get(controllers.index);
router.route('/login').get(controllers.login);
router.route('/register').get(controllers.register);
router.route('/404').get(controllers[404]);
router.route('/500').get(controllers[500]);

module.exports = router;
