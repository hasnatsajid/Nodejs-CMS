const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const { engine } = require('express-handlebars');

const app = express();

const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
const componentRoutes = require('./routes/componentRoutes');

// Setting handlebars as view template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', adminRoutes);
app.use('/', componentRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port: ${process.env.PORT || 3001}`);
});
