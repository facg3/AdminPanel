module.exports = (req, res, cb) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });
  req.on('end', () => {
    cb(null, data);
  });
};
