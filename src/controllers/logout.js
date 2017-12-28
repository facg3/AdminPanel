const cookie = require('./cookie');

exports.get = (req, res) => {
  cookie.delete(req, res);
  return res.redirect('/dashboard');
};
