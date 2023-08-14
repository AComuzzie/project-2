const router = require('express').Router();
const apiRoutes = require('./api/index2');

router.use('/api', apiRoutes);

module.exports = router;
