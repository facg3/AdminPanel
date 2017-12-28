const query = require('../database/queries');

let memberArr;
query.getAllMembers((errorConnectingToDB, members) => {
  if (errorConnectingToDB) {
    return 'errorConnectingToDB';
  }
  memberArr = members;
  return members;
});

const page = (req, res) => {
  res.render('members', {
    title: 'Members', style: 'dashboard', memberArr,
  });
};

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

const deleteUser = (req, res) => {
  query.delMember(req, res, () => {
    query.getAllMembers((errorConnectingToDB, members) => {
      if (errorConnectingToDB) {
        return 'errorConnectingToDB';
      }
      memberArr = members;
      return members;
    });
    page(req, res);
  });
};

module.exports = {
  getAllMembers,
  membersCount,
  deleteUser,
  page,
};
