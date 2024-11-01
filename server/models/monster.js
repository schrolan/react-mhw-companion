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
        action: [String],
        item: [itemSchema]
    },
    protection: {
        item: [itemSchema],
        skill: [skillSchema]
    }
    
})

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

const monsterSchema = new Schema({
    name: String,
    type: String,
    species: String,
    description: String,
    elements: [String],
    ailments: [ailmentSchema],
    locations: [locationSchema],
    resistances: [
        {
            element: String,
            condition: Boolean
        }
    ],
    weaknesses: [
        {
            element: String,
            stars: Number,
            condition: Boolean
        }
    ],
    reward: [
        {
            item: [itemSchema],
             conditions: [
                {
                    type: String,
                    subtype: String,
                    rank: String,
                    quantity: Number,
                    chance: Number
                }
             ]
        }
    ]
})

const Monster = model('Monster', monsterSchema)

module.exports = Monster