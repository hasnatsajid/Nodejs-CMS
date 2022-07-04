module.exports = {
  dashboard: (req, res) => {
    res.render('admin/dashboard');
  },

  transactions: (req, res) => {
    res.render('admin/transactions');
  },

  settings: (req, res) => {
    res.render('admin/settings');
  },
};
