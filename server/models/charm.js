const { Schema, model } = require('mongoose')

const charmSchema = new Schema({
    slug: String,
    name: String,
    ranks: [
        {
            level: Number,
            rarity: Number,
            skills: [
                {
                    slug: String,
                    level: Number,
                    description: String,
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
            crafting: {
                craftable: Boolean,
                materials: [
                    {
                        quantity: Number,
                        item: {
                            name: String,
                            description: String,
                            rarity: Number,
                            carryLimit: Number,
                            sellPrice: Number,
                            buyPrice: Number
                        }
                    }
                ]
            }
        }
    ]
})

const Charm = model('Charm', charmSchema)

module.exports = Charm