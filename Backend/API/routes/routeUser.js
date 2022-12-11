var express = require('express');
var router = express.Router();
var mongoose = require('../DB.js');


router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});

router.get ('/login', function (req, res) {
    var name = req.body.username;
    var pass = req.body.password;
    //find by username and password
    mongoose.model('User').find({username: name, password: pass
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

    //check if username is taken
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            if (user.length > 0) {
                res.json("Username is taken");
            }
        }
    });
    //check if email is taken
    mongoose.model('User').find({email
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            if (user.length > 0) {
                res.json("Email is taken");
            }
        }
    });
    
    
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


router.get ('/Unfollow', function (req, res) {
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
    //remove follower from user's followers
    mongoose.model('User').updateOne
    ({_id: userId}, {$pull: {followers: followerId}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
    //remove user from follower's following
    mongoose.model('User').updateOne
    ({_id:
    followerId}, {$pull: {following: userId}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get ('/GetFollowers', function (req, res) {
    var username = req.body.username;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //get followers of user
    mongoose.model('User').find({_id: userId}, {followers: 1}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get ('/GetFollowing', function (req, res) {
    var username = req.body.username;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //get following of user
    mongoose.model('User').find({_id
    : userId}, {following: 1}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);


        }
    });

});

router.get ('/GetUser', function (req, res) {
    var username = req.body.username;
    //get user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/addHobby', function(req, res) {
    var username = req.body.username;
    var hobby = req.body.hobby;
    var userId;
    //get userid of user
    mongoose.model('User').find({username

    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //add hobby to user's hobbies

    mongoose.model('User').updateOne
    ({_id: userId}, {$push: {hobbies: hobby}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/removeHobby', function(req, res) {
    var username = req.body.username;
    var hobby = req.body.hobby;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //remove hobby from user's hobbies
    mongoose.model('User').updateOne
    ({_id: userId}, {$pull: {hobbies: hobby}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/GetHobbies', function(req, res) {
    var username = req.body.username;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //get hobbies of user

    mongoose.model('User').find({_id
    : userId}, {hobbies: 1}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/GetAllUsers', function(req, res) {
    //get all users
    mongoose.model('User').find({}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/UpdateStars', function(req, res) {
    var username = req.body.username;
    var stars = req.body.stars;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //add stars to user's stars
    mongoose.model('User').updateOne

    ({_id: userId}, {$push: {stars: stars}}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});

router.get('/GetStars', function(req, res) {
    var username = req.body.username;
    var userId;
    //get userid of user
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    //get stars of user
    mongoose.model('User').find({_id
    : userId}, {stars: 1}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});





module.exports.router = router;