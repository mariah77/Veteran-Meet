var express = require('express');
var router = express.Router();

router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});

//event router with reference to schema/event.js
router.route ('/').get (function (req, res) {
    Events.find (function (err, events) {
        if (err) {
            console.log (err);
        }
        else {
            res.json (events);
        }
    });
});
router.get ('/', function (req, res) {
});

router.get ('/about', function (req, res) {
    res.send ('About birds');
});

module.exports.router = router;