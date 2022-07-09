const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();

const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
const componentRoutes = require('./routes/componentRoutes');
const { send } = require('process');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, 'views')));

// app.use('/', (req, res, next) => {
//   res.sendFile('/index.html');

//   next();
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'views/dashboard.html'));
// });

// Routes
// app.use('/', defaultRoutes);
app.use('/', adminRoutes);
app.use('/', componentRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port: ${process.env.PORT || 3001}`);
});
