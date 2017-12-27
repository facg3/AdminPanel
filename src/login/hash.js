const bcrypt = require('bcryptjs');

exports.hashPassword = (pwd, cb) => {
  bcrypt.genSalt(2, (err1, salt) => {
    bcrypt.hash(pwd, salt, (err2, hash) => {
      if (err2) return cb(err2);
      return cb(hash);
    });
  });
};


exports.comparePasswords = (password, hashedPassword, cb) => {
  bcrypt.compare(password, hashedPassword, (err3, res) => {
    if (err3) return cb(err3);
    return cb(err3, res);
  });
};
