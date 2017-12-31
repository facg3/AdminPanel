const app = require('./app');

app.listen(app.get('port'), () => console.log(`We Are Shining Bright, ON: ${app.get('port')}`));
