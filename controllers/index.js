const router = require('express').Router();
const apiRoutes = require('./api');
const listingRoutes = require('./api/listingRoutes');

router.use('/api', apiRoutes);
router.use('/', listingRoutes);

module.exports = router;
