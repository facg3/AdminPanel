const connect = require('../../dbConnection');
const hashFunctions = require('../../../login/');

const compareLogin = (adminObj, cb) => {
  const findAdminQuery = {
    text: 'SELECT * FROM admin WHERE username = $1',
    values: [adminObj.username],
  };
  connect.query(findAdminQuery, (errorConnectingToDB, exists) => {
    if (errorConnectingToDB) {
      return cb(errorConnectingToDB, null);
    } else if (exists.rowCount === 0) {
      return cb(null, 'noSuchAdmin');
    }
    hashFunctions.hash.comparePasswords(adminObj.password, exists.rows[0].password, (errorComparing, comparingResults) => {
      if (errorComparing) {
        return cb(errorComparing, null);
      } else if (comparingResults === false) {
        return cb(null, 'wrongPassword');
      }
      return cb(null, 'loginAllowed');
    });
    return null;
  });
};

module.exports = {
  compareLogin,
};
