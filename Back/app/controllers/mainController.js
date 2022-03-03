const mainController = {
  getHomePage: (request, response) => {
    response.render('');
  },

  error404: (req, res) => {
    res.render('404');
  },
};

module.exports = mainController;
