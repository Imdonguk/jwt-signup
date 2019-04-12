const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const DB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/woogie"

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//mongodb connection
const mongoose = require('mongoose');

mongoose.connect(DB_URI, { useNewUrlParser: true }, (err) => {
  if (err) return console.error('err ' + err);
  console.log('mongodb connected!');
})

//jwt
const jwt = require('jsonwebtoken');
const key = 'secret key';
const token = jwt.sign({ id: 'woogie', userName: 'dungwookisgood' }, key);

const decoded = jwt.verify(token, key);

// console.log(token);
// console.log(decoded);
// console.log(new Date(decoded.iat * 1000))

module.exports = app;
