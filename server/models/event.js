const { Schema, model } = require('mongoose')

const locationSchema = new Schema({
    name: String,
    zoneCount: Number,
    camps: [
        {
            name: String,
            zone: Number
        }
    ]
})

const eventSchema = new Schema({
    name: String,
    platform: String,
    exclusive: Boolean,
    type: String,
    expansion: String,
    description: String,
    requirements: String,
    questRank: Number,
    successConditions: String,
    location: [locationSchema]
})

const Event = model('Event', eventSchema)

module.exports = Event