exports.set = (req, res) => {
  res.writeHead(302, {
    Location: '/dashboard',
    'Set-Cookie': 'logged_in=true; Max_Age=240*600*600',
  });
};

exports.delete = (req, res) => {
  res.writeHead(302, {
    Location: '/login',
    'Set-Cookie': 'logged_in=false; Max_Age=0',
  });
};
