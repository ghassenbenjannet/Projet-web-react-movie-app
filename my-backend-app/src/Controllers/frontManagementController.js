const frontManagementController = {
  home: (req, res) => {
    res.render('home', { user: req.session.user });
  },
  
};

module.exports = frontManagementController;