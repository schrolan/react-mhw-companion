const { Schema, model } = require('mongoose')

const skillSchema = new Schema({
    slug: String,
    name: String,
    description: String,
    ranks: [
        {
            slug: String,
            skill: Number,
            level: Number,
            description: String,
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
    ]
})

const decorationSchema = new Schema({
    slug: String,
    name: String,
    rarity: Number,
    skill: [skillSchema],
     slot: Number
})

const Decoration = model('Decoration', decorationSchema)

module.exports = Decoration