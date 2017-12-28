const query = require('../database/queries');

exports.page = (req, res) => {
  res.render('login', { layout: false });
};

exports.process = (req, res) => {
  const adminObj = JSON.parse(req.body);
  query.compareLogin(adminObj, (errorConnectingToDB, nextStep) => {
    if (errorConnectingToDB) {
      return res.send('errorConnectingToDB');
    } else if (nextStep === 'noSuchAdmin' || nextStep === 'wrongPassword') {
      return res.send('notCorrectLoginAttempt');
    }
    res.send('redirectToDashboard');
  });
};
