const members = require('./members');
const query = require('../database/queries');

let mCount;

query.getAllMembers((errorConnectingToDB, membersResult) => {
  if (errorConnectingToDB) {
    return console.log('errorConnectingToDB');
  }
  mCount = membersResult.length;
  return mCount;
});

exports.get = (req, res) => {
  res.render('dashboard', { title: 'Dashboard', style: 'dashboard', mCount });
};
