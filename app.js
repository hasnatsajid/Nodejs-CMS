const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();

const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');

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

// Routes
app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port: ${process.env.PORT || 3001}`);
});
