const { Schema, model } = require('mongoose')

const itemSchema = new Schema({
    name: String,
    description: String,
    rarity: Number,
    carryLimit: Number,
    value: Number
})

const weaponSchema = new Schema({
    name: String,
    type: String,
    rarity: Number,
    attack: {
        display: Number,
        raw: Number
    },
    elderseal: Boolean,
    attributes: {
        damageType: String
    },
    damageType: String,
    durability: [
        {
            red: Number,
            orange: Number,
            yellow: Number,
            green: Number,
            blue: Number,
            white: Number,
            purple: Number
        }
    ],
    slots: [
        {
            rank: Number
        }
    ],
    elements: [
        {
            type: String,
            damage: Number,
            hidden: Boolean
        }
    ],
    crafting: {
        craftable: Boolean,
        previous: Number || null,
        branches: [Number],
        craftingMaterials: [
            {
                quantity: Number,
                item: [itemSchema]
            }
        ],
        upgradeMaterials: [
            {
                quantity: Number,
                item: [itemSchema]
            }
        ],
        assets: {
            icon: Number,
            image: String
        }
    }
})

const Weapon = model('Weapon', weaponSchema)

module.exports = Weapon