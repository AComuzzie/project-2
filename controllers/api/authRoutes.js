const express = require('express');
const passport = require('passport');
const router = express.Router();

//protect routes with OAuth2 and passport

router.post('/', passport.authenticate('oauth2'), async (req, res) => {
    res.json(req.user);
}
);

module.exports = router;
