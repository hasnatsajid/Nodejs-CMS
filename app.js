const express = require('express');
const router = require('./routes');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  console.log('route 2');

  next();
});

app.use('/', (req, res, next) => {
  // res.render('index', { title: 'Hey', message: 'Hello hasnat!' });

  next();
});

app.use('/login', (req, res, next) => {
  res.render('login', { title: 'Hey', message: 'Hello hasnat!' });
});

// Routes
app.use('/', router);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port: ${process.env.PORT || 3001}`);
});
