var express = require('express');
var router = express.Router();

router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});


router.get ('/', function (req, res) {
    res.send ('Birds home page');
});

router.get ('/about', function (req, res) {
    res.send ('About birds');
});

module.exports.router = router;