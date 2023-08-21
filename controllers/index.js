const router = require('express').Router();
const apiRoutes = require('./api');
const listingRoutes = require('./api/listingRoutes');

router.use('/', apiRoutes);



module.exports = router;
