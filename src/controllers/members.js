const query = require('../database/queries');

let membersCount;
const getAllMembers = (req, res) => {
  query.getAllMembers((errorConnectingToDB, membersResult) => {
    if (errorConnectingToDB) {
      return res.send('errorConnectingToDB');
    }
    membersCount = membersResult.length;
    return res.send(membersResult);
  });
};

module.exports = {
  getAllMembers,
  membersCount,
};
