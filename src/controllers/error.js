const path = require('path');

exports.client = (req, res) => {
  res.status(404).render('error', { layout: false });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', { layout: false });
};
