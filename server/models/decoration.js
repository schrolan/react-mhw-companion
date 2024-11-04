const { Schema, model } = require('mongoose')

const decorationSchema = new Schema({
    slug: String,
    name: String,
    rarity: Number,
    skills: [
        {
            slug: String,
            description: String,
            level: Number,
            skill: Number,
            skillName: String,
            modifiers: [
                {
                    affinity: Number,
                    attack: Number,
                    damageFire: Number,
                    damageWater: Number,
                    damageIce: Number,
                    damageThunder: Number,
                    damageDragon: Number,
                    defense: Number,
                    health: Number,
                    sharpnessBonus: Number,
                    resistAll: Number,
                    resistFire: Number,
                    resistWater: Number,
                    resistIce: Number,
                    resistThunder: Number,
                    resistDragon: Number 
                }
            ]
        }
    ],
    slot: Number
})

const Decoration = model('Decoration', decorationSchema)

module.exports = Decoration