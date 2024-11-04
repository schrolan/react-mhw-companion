const { Schema, model } = require('mongoose')

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
    location: [
        {
            name: String,
            zoneCount: Number,
            camps: [
                {
                    name: String,
                    zone: Number
                }
            ]
        }
    ]
})

const Event = model('Event', eventSchema)

module.exports = Event