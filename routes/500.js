const express = require('express');
const router = express.Router();

router.route('/500').get((req, res) => {
  res.render('500');
});

module.exports = router;
