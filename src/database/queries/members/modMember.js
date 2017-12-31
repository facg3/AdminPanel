// const connect = require('../../dbConnection');
//
// const modMember = (req, res, cb) => {
//   const sqlQueries = {
//     text: 'UPDATE members SET username=$1, password=$2 where member_id=$3',
//     values: [JSON.parse(req.body).user_id],
//   };
//   connect.query(sqlQueries, (errorConnectingToDB, res) => {
//     if (errorConnectingToDB) return cb('errorConnectingToDB');
//
//     const sql2Queries = {
//       text: 'delete from members where id=$1',
//       values: [JSON.parse(req.body).user_id],
//     };
//     connect.query(sql2Queries, (error, queryResponse) => {
//       console.log(error);
//       console.log(null, queryResponse);
//       console.log(res);
//       if (error) return cb('error');
//       return cb(error, 'deleted');
//     });
//   });
// };
//
// module.exports = modMember;
