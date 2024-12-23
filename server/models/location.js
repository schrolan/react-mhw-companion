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

const Location = model('Location', locationSchema)

module.exports = Location