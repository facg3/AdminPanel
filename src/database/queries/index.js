const compareLogin = require('./login/compareLogin');
const members = require('./members');

module.exports = {
  compareLogin: compareLogin.compareLogin,
  getAllMembers: members.getAllMembers,
  delMember: members.delMember,
  modMember: members.modMember,
};
