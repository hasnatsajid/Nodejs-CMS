const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const app = express();

const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
const componentRoutes = require('./routes/componentRoutes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', (req, res) => {
  res.sendFile('/index.html');
});

// Routes
app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);
app.use('/component', componentRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port: ${process.env.PORT || 3001}`);
});
