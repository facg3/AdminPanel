const query = require('../database/queries');

let mCount;
let pCount;

query.getAllMembers((errorConnectingToDB, membersResult) => {
  if (errorConnectingToDB) {
    return 'errorConnectingToDB';
  }
  mCount = membersResult.length;
  return mCount;
});

query.getAllPosts((errorConnectingToDB, postsResult) => {
  if (errorConnectingToDB) {
    return 'errorConnectingToDB';
  }
  pCount = postsResult.length;
  return pCount;
});


exports.get = (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard', style: 'dashboard', mCount, pCount,
  });
};
