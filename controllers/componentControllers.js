const path = require('path');

module.exports = {
  buttons: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/buttons.html'));
  },

  notifications: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/notifications.html'));
  },

  forms: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/forms.html'));
  },

  modals: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/modals.html'));
  },

  tables: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/tables.html'));
  },

  typography: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/components/typography.html'));
  },

  //   transactions: (req, res) => {
  //     res.render('admin/transactions');
  //   },

  //   settings: (req, res) => {
  //     res.render('admin/settings');
  //   },
};
