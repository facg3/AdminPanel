const express = require('express');

const router = express.Router();
const login = require('./login');
const logout = require('./logout');
const dashboard = require('./dashboard');
const members = require('./members');
const posts = require('./posts');
const errors = require('./error');

router.get('/', login.page);
router.get('/dashboard', dashboard.get);
router.get('/members', members.page);
router.get('/getMembers', members.getAllMembers);
router.get('/posts', posts.page);
// router.get('/getPosts', posts.getAllPosts);
router.post('/member/delete', members.delMember);
// router.post('/member/update', members.updateUser);
// router.post('/post/delete', posts.deletePost);
// router.post('/post/update', posts.updatePost);
router.post('/login', login.process);
router.get('/logout', logout.get);
router.use(errors.client);
router.use(errors.server);

module.exports = router;
