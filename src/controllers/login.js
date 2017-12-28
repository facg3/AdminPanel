const query = require('../database/queries');
const cookie = require('./cookie');

exports.page = (req, res) => {
  res.render('login', { layout: false });
};

exports.process = (req, res) => {
  const adminObj = JSON.parse(req.body);
  query.compareLogin(adminObj, (errorConnectingToDB, nextStep) => {
    console.log(errorConnectingToDB);
    if (errorConnectingToDB) {
      return res.send('errorConnectingToDB');
    } else if (nextStep === 'noSuchAdmin' || nextStep === 'wrongPassword') {
      return res.send('notCorrectLoginAttempt');
    }
    cookie.set(req, res);
    return res.send();
  });
};
