const path = require('path');

module.exports = {
  dashboard: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/dashboard.html'));
  },

  transactions: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/transactions.html'));
  },

  settings: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/settings.html'));
  },
};
