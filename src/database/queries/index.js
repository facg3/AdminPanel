const compareLogin = require('./login/compareLogin');
const members = require('./members');
const posts = require('./posts');

module.exports = {
  compareLogin: compareLogin.compareLogin,
  getAllMembers: members.getAllMembers,
  delMember: members.delMember,
  modMember: members.modMember,
  getMemberPosts: members.getMemberPosts,
  getAllPosts: posts.getAllPosts,
  delPost: posts.delPost,
  modPost: posts.modPost,
};
