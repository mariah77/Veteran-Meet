const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //incremental id
    //user id
    name: String,
    email: String,
    password: String,
    role: String,
    hobbies: [String],
    //following: [String]
    following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //Following is actually reference to the users that the user is following
    //followers: [String]
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], //Followers is actually reference to the users that are following the user
    stars : Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);