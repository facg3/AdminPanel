const supertest = require('supertest');
const app = require('../app.js');
const test = require('tape');

test('Test for endpoint: /login', (t) => {
  supertest(app)
    .get('/api/v1/login')
    .expect(404)
    .end((err) => {
      t.error(err, 'no error');
      t.end();
    });
});
test.onFinish(() => process.exit(0));
