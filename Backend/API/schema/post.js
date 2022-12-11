const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    //incremental id
    //user id
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    //picture
    title: String,
    content: String,
    Comments: [String, {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, Date],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);
