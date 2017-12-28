exports.set = (req, res) => {
  res.setHeader('Set-Cookie', ['logged_in=true; Max_Age=240*600*600']);
};

exports.delete = (req, res) => {
  res.setHeader('Set-Cookie', ['logged_in=0; Max-Age=0']);
};
