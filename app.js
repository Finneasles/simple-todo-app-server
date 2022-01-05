var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./db/server.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ApiRoute = require('./routes/api');
var cors = require('cors');

var app = express();

var corsOptions = {
    origin: 'http://localhost:4000'
  }

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', ApiRoute);

db.mongoose
  .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
  })
  .then(() => {
     console.log("Connected to the database!");
  })
  .catch(err => {
     console.log("Cannot connect to the database!", err);
     process.exit();
  });

module.exports = app;
