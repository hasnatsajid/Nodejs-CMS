const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello hasnat!' });
});

module.exports = router;
