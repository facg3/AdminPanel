const compareLogin = require('./login/compareLogin');
const members = require('./members');
const posts = require('./posts');

module.exports = {
  compareLogin: compareLogin.compareLogin,
  getAllMembers: members.getAllMembers,
  delMember: members.delMember,
  modMember: members.modMember,
  getAllPosts: posts.getAllPosts,
  delPost: posts.delPost,
  modPost: posts.modPost,
};
