
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    //incremental id
    eventName: String,
    eventDate: Date,
    eventLocation: String,
    eventDescription: String,
    eventType: String,
    eventHost: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, //user id
    points : Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Events', EventsSchema);