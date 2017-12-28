const query = require('../database/queries');

exports.page = (req, res) => {
  res.render('login', { layout: false });
};

exports.process = (req, res) => {
  const adminObj = JSON.parse(req.body);
  query.compareLogin(adminObj, (errorConnectingToDB, nextStep) => {
    if (errorConnectingToDB) {
      res.send('errorConnectingToDB');
    } else if (nextStep === 'noSuchAdmin' || nextStep === 'wrongPassword') {
      res.send('notCorrectLoginAttempt');
    } else {
      res.setHeader('Set-Cookie', ['logged_in=true; Max_Age=240*600*600']);
      return res.send('redirectToDashboard');
    }
  });
};
