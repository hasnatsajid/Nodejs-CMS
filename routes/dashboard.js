const express = require('express');
const router = express.Router();

router.route('/dashboard').get((req, res) => {
  res.render('dashboard');
});

module.exports = router;
