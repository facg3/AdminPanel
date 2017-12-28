const connect = require('../../dbConnection');

const getAllMembers = (cb) => {
  const sqlQueries = {
    text: 'select * from members',
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');
    return cb(errorConnectingToDB, res.rows);
  });
};

module.exports = getAllMembers;
