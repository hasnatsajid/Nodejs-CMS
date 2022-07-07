module.exports = {
  index: (req, res) => {
    res.render('/index.html');
  },

  login: (req, res) => {
    res.render('/login.html');
  },

  register: (req, res) => {
    res.render('register');
  },

  404: (req, res) => {
    res.render('404');
  },

  500: (req, res) => {
    res.render('500');
  },
};
