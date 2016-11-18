var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    session: req.session,
    user: req.user,
    authenticated: req.isAuthenticated()
  });
});

module.exports = router;
