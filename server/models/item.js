const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: String,
    description: String,
    rarity: Number,
    carryLimit: Number,
    value: Number
})

const Item = model('Item', itemSchema)

module.exports = Item