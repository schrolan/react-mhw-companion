const { Schema, model } = require('mongoose')

const armorSchema = new Schema({
    slug: String,
    name: String,
    type: String,
    rank: String,
    rarity: Number,
    defense: [
        {
            base: Number,
            max: Number,
            augmented: Number
        }
    ],
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
    skills:[
        { 
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
        }
    ],
     armorSet: {
        name: String,
        rank: String,
        pieces: [Number]
     },
     assets: {
        imageMale: String,
        imageFemale: String
     },
     crafting: {
        materials: [
            {
                quantity: Number,
                item: {
                    name: String,
                    description: String,
                    rarity: Number,
                    carryLimit: Number,
                    value: Number
                }
            }
        ]
     }
})

const Armor = model('Armor', armorSchema)

module.exports = Armor