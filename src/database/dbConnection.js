// const { Pool } = require('pg');
// const url = require('url');
// const env = require('env2');
//
// env('./config.env');
//
// if (!process.env.USERS_DB_URL) {
//   throw new Error('Environment variable USERS_DB_URL must be set');
// }
//
// const params = url.parse(process.env.USERS_DB_URL);
// const [username, password] = params.auth.split(':');
//
// const options = {
//   host: params.hostname,
//   port: params.port,
//   database: params.pathname.split('/')[1],
//   max: process.env.DB_MAX_CONNECTIONS || 2,
// };
//
// if (username) { options.user = username; }
// if (password) { options.password = password; }
//
// options.ssl = (options.host !== 'localhost');
//
// module.exports = new Pool(options);
require('env2')('./config.env');

const {
  Pool
} = require('pg');

let url = '';
if (!process.env.USERS_DB_URL) throw new Error('Error connecting to database');
if (process.env.NODE_ENV === 'test') url = process.env.TEST_URL;
else url = process.env.USERS_DB_URL;
const pool = new Pool({
  connectionString: url,
  ssl: true
});
module.exports = pool;
