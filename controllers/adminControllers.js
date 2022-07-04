module.exports = {
  dashboard: (req, res) => {
    res.render('admin/dashboard', { title: 'Hey', message: 'Hello hasnat!' });
  },
};
