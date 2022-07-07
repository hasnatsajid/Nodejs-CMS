module.exports = {
  buttons: (req, res) => {
    res.render('components/buttons');
  },

  notifications: (req, res) => {
    res.render('components/notifications');
  },

  forms: (req, res) => {
    res.render('components/forms');
  },

  modals: (req, res) => {
    res.render('components/modals');
  },

  tables: (req, res) => {
    res.render('components/tables');
  },

  typography: (req, res) => {
    res.render('components/typography');
  },

  //   transactions: (req, res) => {
  //     res.render('admin/transactions');
  //   },

  //   settings: (req, res) => {
  //     res.render('admin/settings');
  //   },
};
