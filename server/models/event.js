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
    startTimestamp: Date,
    endTimestamp: Date,
    location: {
        type: [Schema.Types.ObjectId],
        ref: "Location"
    }
})

const Event = model('Event', eventSchema)

module.exports = Event