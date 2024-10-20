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

const Location = model('Location', locationSchema)

module.exports = Location