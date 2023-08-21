const router = require('express').Router();
const { Listing } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', (req, res) => {
  Listing.findAll ({
    attributes: [
      'id', 
      'business_name', 
      'job_title', 
      'date_created', 
      'job_description', 
      'job_location', 
      'email'
    ],

  })
  .then(dbListingData => {
    const listings = dbListingData.map(listing => listing.get({ plain: true }));
    res.render('jobboard', {
      listings
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/login', (req, res) => {
 res.render('login') 

});

router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/jobboard', (req, res) => {
  res.render('jobboard')
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
});


module.exports = router;
