require('dotenv').config();

const path = require('path');
const express = require('express');
const request = require('express-request');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const oauth2 = require('passport-oauth2');

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

  
  const hbs = exphbs.create({ helpers });
  
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use(routes);
  
  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

  // new line
  app.get('/login', (req, res) => {
    const authEndpoint = 'https://oauth2-provider.com/authorize'
  
    const queryParams = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      redirect_uri: process.env.REDIRECT_URI
    })
  
    const authUrl = `${authEndpoint}?${queryParams}`
  
    res.redirect(authUrl)
  })
  
  app.get('/callback', async (req, res) => {
    const tokenEndpoint = 'https://oauth2-provider.com/token'
  
    const { code } = req.query
  
    const requestBody = {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI
    }
  
    const options = {
      method: 'POST',
      uri: tokenEndpoint,
      form: requestBody,
      json: true
    }})
  
    // try {
    //   const response = await request(options)
  
    //   req.session.accessToken = response.access_token
    //   req.session.refreshToken = response.refresh_token
  
    //   res.redirect('/user')
  
//   } catch (err) {
//   res.send('Error retrieving access token')
//   }
//   })
  
  app.get('/user', async (req, res) => {
  const userEndpoint = 'https://oauth2-provider.com/userinfo'
  
  const options = {
  headers: {
  Authorization: `Bearer ${req.session.accessToken}`
  },
  json: true
  }
  
  try {
  const response = await request.get(userEndpoint, options)
  res.send(response)
  } catch (err) {
  res.send('Error retrieving user info')
  }
  })
  
  app.listen(PORT, () => {
    console.log('`App listening at http://localhost:${PORT} 🚀`')
})