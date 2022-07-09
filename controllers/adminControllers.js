module.exports = {
  dashboard: (req, res) => {
    // res.sendFile('/admin/dashboard.html');
    res.send('dashboard');
  },

  transactions: (req, res) => {
    res.render('admin/transactions');
  },

  settings: (req, res) => {
    res.render('admin/settings');
  },
};
