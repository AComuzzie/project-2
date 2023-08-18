const router = require('express').Router();
const apiRoutes = require('./api');
const listingRoutes = require('./listingRoutes');

router.use('/api', apiRoutes);
router.use('/', listingRoutes);

module.exports = router;
