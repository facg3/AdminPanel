const query = require('../database/queries');

let postsArr;
query.getAllPosts((errorConnectingToDB, postsResult) => {
  if (errorConnectingToDB) {
    return 'errorConnectingToDB';
  }
  postsArr = postsResult;
  console.log(postsResult);
  return postsArr;
});


const page = (req, res) => {
  res.render('posts', {
    title: 'Posts', style: 'dashboard', postsArr,
  });
};

module.exports = {
  page,
};
