const { Schema, model } = require('mongoose')

const armorSchema = new Schema({
    slug: String,
    name: String,
    type: String,
    rank: String,
    rarity: Number,
    defense: {
        base: Number,
        max: Number,
        augmented: Number
    },
    resistances: {
        fire: Number,
        water: Number,
        ice: Number,
        thunder: Number,
        dragon: Number
    },
    slots: {
        rank: Number
    },
    skill: { 
        type: [Schema.Types.ObjectId],
        ref: "Skill"
     },
     armorSet: {
        id: Number,
        name: String,
        rank: String,
        pieces: [Number]
     },
     assets: {
        imageMale: Number,
        imageFemale: Number
     },
     crafting: {
        materials: [
            {
                quantity: Number,
                item: { 
                    type: [Schema.Types.ObjectId],
                    ref: "Item"
                 }
            }
        ]
     }
})

const Armor = model('Armor', armorSchema)

module.exports = Armor