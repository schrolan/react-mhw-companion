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

const charmSchema = new Schema({
    id: Number,
    slug: String,
    name: String,
    ranks: {
        level: Number,
        rarity: Number,
        skill: [skillSchema],
         crafting: {
            craftable: Boolean,
            materials:[
                {
                    quantity: Number,
                    item: [itemSchema]
                }
            ]
         }
    }
})

const Charm = model('Charm', charmSchema)

module.exports = Charm