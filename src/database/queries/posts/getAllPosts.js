const connect = require('../../dbConnection');

const getAllPosts = (cb) => {
  const sqlQueries = {
    text: 'select * from posts',
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');
    return cb(errorConnectingToDB, res.rows);
  });
};

module.exports = getAllPosts;
