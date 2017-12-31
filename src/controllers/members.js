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

const delMember = (req, res) => {
  query.delMember(req, res, (err, dbresponse) => {
    // normally dbresponse should be 'deleted'
    if (err) {
      return res.end('errorDeletingPosts');
    }
    query.getAllMembers((errorConnectingToDB, members) => {
      memberArr = members;
      return res.send('deleted');
    });
  });
};

const page = (req, res) => {
  let memberArr;
  query.getAllMembers((errorConnectingToDB, members) => {
    if (errorConnectingToDB) {
      return 'errorConnectingToDB';
    }
    memberArr = members;
    res.render('members', {
      title: 'Members', style: 'dashboard', memberArr,
    });
    return null;
  });
};

module.exports = {
  getAllMembers,
  membersCount,
  delMember,
  page,
};
