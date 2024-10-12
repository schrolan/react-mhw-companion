const { Schema, model } = require('mongoose')

const armorSetSchema = new Schema({
    name: String,
    rank: String,
    pieces: [
        {
            id: Number,
            slug: String,
            name: String,
            type: String,
            rank: String,
            rarity: Number,
            armorSet: Number,
            attributes: {
                defense: Number,
                resistFire: Number,
                resistWater: Number,
                resistThunder: Number,
                resistIce: Number
            },
            skill: { 
                type: [Schema.Types.ObjectId],
                ref: "Skill"
             },
             skill: Number,
             skillName: String,
             assets: {
                 imageMale: Number,
                 imageFemale: Number
             }
        }
    ],
    bonus: {
        id: Number,
        name: String,
        ranks: [
            {
                pieces: Number,
                skill: {
                    id: Number,
                    slug: String,
                    level: Number,
                    description: String,
                    modifiers: [String],
                    skill: Number,
                    skillName: String
                }
            }
        ]
    }
})

const ArmorSet = model('ArmorSet', armorSetSchema)

module.exports = ArmorSet