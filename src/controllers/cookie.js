exports.set = (req, res) => {
  res.setHeader('Set-Cookie', ['logged_in=true; Max_Age=240*600*600']);
};

exports.delete = (req, res) => {
  res.setHeader('Set-Cookie', ['logged_in=0; Max-Age=0']);
};

exports.cookieChecker = (req, res, next) => {
  const endpoint = req.url;
  console.log(req.headers.cookie);
  if (!req.headers.cookie.includes('logged_in=true') && endpoint !== '/' && endpoint !== '/login') {
    return res.redirect('/');
  } else if (req.headers.cookie.includes('logged_in=true') && endpoint === '/') {
    return res.redirect('/dashboard');
  }
  next();
};
