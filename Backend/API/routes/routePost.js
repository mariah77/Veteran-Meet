var express = require('express');
var router = express.Router();
var mongoose = require('../DB.js');


router.use (function (req, res, next) { //middleware
    console.log ('Time:', Date.now ());
    next ();
});


router.get ('/makePost', function (req, res) {
    var username = req.body.username;
    var post = req.body.post;
    var date = req.body.date;
    var title = req.body.title;
    var userId;
    //get userid of userMaking Post
    mongoose.model('User').find({username
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    mongoose.model('Post').create({
        user: userId,
        post: post,
        date: date,
        title : title
    }, function(err, post) {
        if (err) {
            console.log(err);
        } else {
            res.json(post);
        }
    });
});

router.get ('/addComment', function (req, res) {
    var postId = req.body.postId;
    var comment = req.body.comment;
    var date = req.body.date;
    var name = req.body.name;
    var userId;
    //get userid of userMaking Post
    mongoose.model('User').find({username : name
    }, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            userId = user._id;
        }
    });
    mongoose.model('Post').find({postId : postId
    }, function(err, post) {
        if (err) {
            console.log(err);
        } else {
            post.Comments.push(comment, userId, date);
        }
    });
});

module.exports.router = router;