const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    rarity: Number,
    carryLimit: Number,
    value: Number
})

const skillSchema = new Schema({
    id: Number,
    slug: String,
    name: String,
    description: String,
    ranks: [
        {
            id: Number,
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
    id: Number,
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
    id: Number,
    name: String,
    zoneCount: Number,
    camps: [
        {
            id: Number,
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
    location: [locationSchema],
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
            id: Number,
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