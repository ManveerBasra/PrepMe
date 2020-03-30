const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    file_id: {
        type: String,
        required: true
    },
    file_url: {
        type: String,
        required: true
    },
    created_at: String
});

const EventSchema = new mongoose.Schema({
    icon: {
        type: Number,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    date: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    time: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    size: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    members: {
        type: [String],
        required: true,
    },
    files: {
        type: [FileSchema],
        required: true
    }
});

const Event = mongoose.model('event', EventSchema);
const EventFile = mongoose.model('eventFile', File);
module.exports = { Event, EventFile };