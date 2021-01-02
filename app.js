require('dotenv').config()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path');

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express()

app.listen(5000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  });

// require database configuration
require('./bin/db.config')

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
app.use('/', index);

const cocktails = require('./routes/cocktails')
app.use('/cocktails', cocktails)

module.exports = app;