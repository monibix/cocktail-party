require('dotenv').config()

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const connectSession = require('./bin/session.config')

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express()
connectSession(app)

app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  });

// require database configuration
const connectDB = require('./bin/db.config')

connectDB()

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public/')));

// Configuracion hbs
hbs.registerPartials(`${__dirname}/views/partials`)

//Creando una variable local currentUser que contiene el id de la session
app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser;
  next();
});

const index = require('./routes/index.routes');
app.use('/', index);

const cocktails = require('./routes/cocktails.routes')
app.use('/cocktails', cocktails)

const auth = require('./routes/auth.routes')
app.use('/auth', auth)

module.exports = app;