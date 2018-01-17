var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = require('./config');

var index = require('./routes/index');
var register = require('./routes/register');
var login = require('./routes/login');
var dashboard = require('./routes/admin/dashboard');
var viewDuties = require('./routes/admin/viewDuties');
var createCentre = require('./routes/admin/createCentre');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// Set HTML engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: config.secret,
	key: config.key,
	resave: true,
	saveUninitialized: true
}));

app.use('/', index);
app.use('/register', register);
app.use('/login', login);
app.use('/dashboard', dashboard);
app.use('/admin/viewDuties', viewDuties);
app.use('/admin/createCentre', createCentre);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
