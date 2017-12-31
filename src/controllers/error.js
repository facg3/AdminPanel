exports.client = (req, res) => {
  res.status(404).render('error', { layout: false });
};

exports.server = (err, req, res) => {
  res.status(500).render('error', { layout: false });
};
