const path = require('path');

exports.get = (req, res) => {
  res.render('dashboard', { title: 'Dashboard', style: 'dashboard' });
};
