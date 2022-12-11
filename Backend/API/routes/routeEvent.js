var express = require('express');
var router = express.Router();

router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});

//event router with reference to schema/event.js
router.get ('/makeEvent', function (req, res) {
    var name = req.body.name;
    var date = req.body.date;
    var location = req.body.location;
    var hobby = req.body.hobby;
    var description = req.body.description;
    var points = req.body.points;
    var userId;


    var userId;
    //get userid of userMaking Post
    mongoose.model('User').find({username: name
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    mongoose.model('Event').create({
        eventName: name,
        eventDate: date,
        eventLocation: location,
        eventHobby: hobby,
        eventDescription: description,
        eventPoints: points,
        eventHost: userId
    }, function(err, event) {
        if (err) {
            console.log(err);
        } else {
            res.json(event);
        }
    });
});

router.get ('/getEvents', function (req, res) {
    mongoose.model('Event').find({}, function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

router.get ('/getEvent', function (req, res) {
    var eventId = req.body.eventId;
    mongoose.model('Event').find({eventId : eventId
    }, function(err, event) {
        if (err) {
            console.log(err);
        } else {
            res.json(event);
        }
    });
});

router.get ('/getEventsByHobby', function (req, res) {
    var hobby = req.body.hobby;
    mongoose.model('Event').find({eventHobby : hobby
    }, function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

router.get ('/getEventsByHost', function (req, res) {
    var host = req.body.host;
    mongoose.model('Event').find({eventHost : host
    }, function(err, events) {
        if (err) {
            console.log(err);
        } else {

            res.json(events);
        }

    });
});

router.get ('/getEventsByLocation', function (req, res) {
    var location = req.body.location;
    mongoose.model('Event').find({eventLocation : location
    }, function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

router.get ('/getEventsByDate', function (req, res) {
    var date = req.body.date;
    mongoose.model('Event').find({eventDate : date
    }, function(err, events) {
        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});

router.get ('/getEventsByPoints', function (req, res) {
    var points = req.body.points;

    mongoose.model('Event').find({eventPoints : points
    }, function(err, events) {

        if (err) {
            console.log(err);
        } else {
            res.json(events);
        }
    });
});



module.exports.router = router;