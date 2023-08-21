require('dotenv').config();


const path = require('path');
const express = require('express');
const request = require('express-request');
const session = require('express-session');
const authRoutes = require('./controllers/api/authRoutes');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const oauth2 = require('passport-oauth2');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());

  
  const hbs = exphbs.create({ helpers });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', path.join(__dirname, 'views'));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use('/auth', authRoutes);


  app.use(require('./controllers/'));

  const jobboardRoutes = require('./controllers');
  app.use('/api', jobboardRoutes);

  const viewRoutes = require('./views');
  app.use('/', viewRoutes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
  });
  
