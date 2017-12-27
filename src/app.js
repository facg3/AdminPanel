const express = require('express');

const app = express();
const hbars = require('express-handlebars');
const path = require('path');
const routes = require('./controllers');
// const helpers = require('./views/helpers/index');
const favicon = require('serve-favicon');


app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbars({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
}));

app.set('port', process.env.PORT || 4001);
app.use(favicon(path.join(__dirname, '..', 'public', 'img', 'favicon.ico')));
app.use(routes);

module.exports = app;
