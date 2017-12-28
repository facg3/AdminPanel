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
// router.get('/members', members.getAllMembers);
// router.get('/posts', posts.getAllPosts);
// router.post('/member/delete', members.deleteMember);
// router.post('/member/update', members.updateMember);
// router.post('/post/delete', posts.deletePost);
// router.post('/post/update', posts.updatePost);
router.post('/login', login.process);
// router.post('/logout', logout.get);
router.use(errors.client);
router.use(errors.server);

module.exports = router;
