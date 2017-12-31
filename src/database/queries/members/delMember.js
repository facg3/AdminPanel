const connect = require('../../dbConnection');

const delMember = (req, res, cb) => {
  const sqlQueriesDeletePostsRelatedToUser = {
    text: 'delete from posts where member_id=$1',
    values: [JSON.parse(req.body).user_id],
  };
  const sqlQueriesDeleteUser = {
    text: 'delete from members where id=$1',
    values: [JSON.parse(req.body).user_id],
  };
  connect.query(sqlQueriesDeletePostsRelatedToUser, (errorDeletingPosts, response) => {
    if (errorDeletingPosts) {
      throw new Error('errorDeletingPosts');
    }
    connect.query(sqlQueriesDeleteUser, (errorDeletingUsing, queryResponse) => {
      if (errorDeletingUsing) {
        throw new Error('errorDeletingUsing');
      }
      return cb(null, 'deleted');
    });
  });
};

module.exports = delMember;
