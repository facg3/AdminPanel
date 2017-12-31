const query = require('../database/queries');

exports.get = (req, res) => {
  let mCount;
  let pCount;
  query.getAllMembers((errorConnectingToDB, membersResult) => {
    if (errorConnectingToDB) {
      return 'errorConnectingToDB';
    }
    mCount = membersResult.length;
    query.getAllPosts((errorConnectingToDB, postsResult) => {
      if (errorConnectingToDB) {
        return 'errorConnectingToDB';
      }
      pCount = postsResult.length;
      res.render('dashboard', {
        title: 'Dashboard',
        style: 'dashboard',
        mCount,
        pCount,
      });
      return null;
    });
    return null;

  });

};
