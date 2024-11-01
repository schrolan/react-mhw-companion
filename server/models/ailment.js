const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: String,
    description: String,
    rarity: Number,
    carryLimit: Number,
    value: Number
})

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

const ailmentSchema = new Schema({
    name: String,
    description: String,
    recovery: {
        actions: [String],
        items: [itemSchema]
    },
    protection: {
        items: [itemSchema],
        skills: [skillSchema]
    }
    
})

const Ailment = model('Ailment', ailmentSchema)

module.exports = Ailment