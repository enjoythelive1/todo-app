var mongoose = require('./../database/mongoose');

module.exports = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    done: Boolean,
    date_creation: Date,
    date_expires: Date,
    alarm: {
        month: Number,
        days: Number,
        hours: Number,
        minutes: Number,
        date: Date
    }
});