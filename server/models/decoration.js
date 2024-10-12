const { Schema, model } = require('mongoose')

const decorationSchema = new Schema({
    slug: String,
    name: String,
    rarity: Number,
    skill: { 
        type: [Schema.Types.ObjectId],
        ref: "Skill"
     },
     slot: Number
})

const Charm = model('Charm', charmSchema)

module.exports = Charm