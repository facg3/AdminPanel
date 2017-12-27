const query = require('../database/queries');

exports.page = (req, res) => {
  res.render('login', { layout: false });
};

exports.process = (req, res) => {
  let allData = '';
  req.on('data', (chunk) => {
    allData += chunk;
  });
  req.on('end', () => {
    const adminObj = JSON.parse(allData);
    query.compareLogin(adminObj, (noSuchAdmin, nextStep) => {
      if (noSuchAdmin) {
        return res.send('errorConnectingToDB');
      } else if (nextStep === 'noSuchAdmin' || nextStep === 'wrongPassword') {
        return res.send('notCorrectLoginAttemp');
      }
      return res.redirect('/dashboard');
    });
  });
};
