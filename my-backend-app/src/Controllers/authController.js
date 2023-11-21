const authController = {
  login: (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
      req.session.user = { username: 'admin' };
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  },
};

module.exports = authController;
