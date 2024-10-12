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

const Decoration = model('Decoration', decorationSchema)

module.exports = Decoration