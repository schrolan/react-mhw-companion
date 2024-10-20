const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
    id: Number,
    name: String,
    zoneCount: Number,
    camps: [
        {
            id: Number,
            name: String,
            zone: Number
        }
    ]
})

const eventSchema = new Schema({
    id: Number,
    name: String,
    platform: String,
    exclusive: Boolean,
    type: String,
    expansion: String,
    description: String,
    requirements: String,
    questRank: Number,
    successConditions: String,
    startTimestamp: Date,
    endTimestamp: Date,
    location: [locationSchema]
})

const Event = model('Event', eventSchema)

module.exports = Event