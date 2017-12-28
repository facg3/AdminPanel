const connect = require('../../dbConnection');

const delMember = (req, res, cb) => {
  const sqlQueries = {
    text: 'delete from posts where member_id=$1',
    values: [JSON.parse(req.body).user_id],
  };
  connect.query(sqlQueries, (errorConnectingToDB, res) => {
    if (errorConnectingToDB) return cb('errorConnectingToDB');

    const sql2Queries = {
      text: 'delete from members where id=$1',
      values: [JSON.parse(req.body).user_id],
    };
    connect.query(sql2Queries, (error, queryResponse) => {
      console.log(error);
      console.log(null, queryResponse);
      console.log(res);
      if (error) return cb('error');
      return cb(error, 'deleted');
    });
  });
};
//   const sqlQueries = {
//     text: 'delete from members where id=$1',
//     values: [JSON.parse(req.body).user_id],
//   };
//   connect.query(sqlQueries, (errorConnectingToDB, res) => {
//     console.log(errorConnectingToDB);
//     console.log(null, res);
//     if (errorConnectingToDB) return cb('errorConnectingToDB');
//     return cb(errorConnectingToDB, 'deleted');
//   });
// };

module.exports = delMember;
