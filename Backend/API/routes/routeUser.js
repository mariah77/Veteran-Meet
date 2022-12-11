var express = require('express');
var router = express.Router();
var mongoose = require('../DB.js');


router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});

router.get ('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});


router.get ('/SignUp', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var role = req.body.role;
    var hobbies = req.body.hobbies;

    mongoose.model('User').create({
        username: username,
        password: password,
        email: email,
        role: role,
        hobbies: hobbies
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get ('/Follow', function (req, res) {
    var username = req.body.username;
    var followerUsername = req.body.followerUsername;
    var userId;
    var followerId;
    //get userid of follower
    mongoose.model('User').find({followerUsername
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            followerId = user._id;
        }
    });
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //add follower to user's followers
    mongoose.model('User').updateOne({_id: userId}, {$push: {followers: followerId}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
    //add user to follower's following
    mongoose.model('User').updateOne({_id: followerId}, {$push: {following: userId}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});




module.exports.router = router;